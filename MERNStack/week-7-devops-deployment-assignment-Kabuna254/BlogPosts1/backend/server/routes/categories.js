const express = require('express');
const { body } = require('express-validator');
const categoryController = require('../controllers/categoryController');

const router = express.Router();

router.get('/', categoryController.getAllCategories);

router.post(
  '/',
  [body('name').notEmpty().withMessage('Category name is required')],
  categoryController.createCategory
);

module.exports = router;
