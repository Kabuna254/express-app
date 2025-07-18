const express = require('express');
const { body, validationResult } = require('express-validator');
const jwt = require('jsonwebtoken');
const User = require('../models/User'); // Ensure you have a User model defined
const { deleteUser } = require('../controllers/authcontroller'); // Import the deleteUser controller
const protect = require('../middleware/authMiddleware'); // Ensure you have an auth middleware for protecting routes

const router = express.Router();
const JWT_SECRET = process.env.JWT_SECRET || 'kabuna254'; // Add to your .env

// Register
router.post(
  '/register',
  [
    body('email').isEmail(),
    body('password').isLength({ min: 6 }),
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { email, password } = req.body;

    try {
      const existingUser = await User.findOne({ email });
      if (existingUser) {
        return res.status(400).json({ message: 'User already exists' });
      }

      const newUser = new User({ email, password });
      await newUser.save();

      res.status(201).json({ message: 'User registered successfully' });
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  }
);

// Login
router.post(
  '/login',
  [
    body('email').isEmail(),
    body('password').notEmpty(),
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { email, password } = req.body;

    try {
      const user = await User.findOne({ email });
      if (!user) {
        return res.status(401).json({ message: 'Invalid email or password' });
      }

      const isMatch = await user.comparePassword(password);
      if (!isMatch) {
        return res.status(401).json({ message: 'Invalid email or password' });
      }

      // Generate JWT token
      const token = jwt.sign({ userId: user._id }, JWT_SECRET, { expiresIn: '7d' });

      res.json({ token, user: { id: user._id, email: user.email } });
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  }
);
// Delete User Account
router.delete('/delete', protect, deleteUser);

module.exports = router;
