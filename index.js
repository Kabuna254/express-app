const express = require('express');
const mongoose = require('mongoose');
const app = express();
const swaggerUi = require('swagger-ui-express');
const YAML = require('yamljs');
const swaggerDocument = YAML.load('./swagger.yaml');

const PORT = 4000;

// Connect to MongoDB
mongoose.connect('mongodb://127.0.0.1:27017/Practices', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(() => console.log('Connected to MongoDB'))
.catch(err => console.error('MongoDB connection error:', err));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

// STEP 1: Update Schema to use manual `id`
const userSchema = new mongoose.Schema({
    id: { type: Number, required: true, unique: true }, // <-- Make `id` required & unique
    name: String
});
const User = mongoose.model('User', userSchema);

// Routes
app.get('/', (req, res) => {
    res.send('Hello, Express.js!');
});

app.get('/user/:id', (req, res) => {
    res.send(`User ID: ${req.params.id}`);
});

app.get('/search', (req, res) => {
    const query = req.query.q;
    res.send(`Search results for: ${query}`);
});

// GET all users
app.get('/users', async (req, res) => {
    const users = await User.find();
    res.json(users);
});

// STEP 2: Get user by manual `id` (not Mongo _id)
app.get('/users/:id', async (req, res) => {
    try {
        const user = await User.findOne({ id: parseInt(req.params.id) }); // <-- Use custom id
        if (!user) return res.status(404).send('User not found');
        res.json(user);
    } catch (err) {
        res.status(400).send('Invalid ID');
    }
});

// STEP 3: Allow manual `id` on creation
app.post('/users', async (req, res) => {
    const { id, name } = req.body;
    if (!id || !name) return res.status(400).send("ID and name are required");

    const exists = await User.findOne({ id }); // <-- Prevent duplicate ID
    if (exists) return res.status(400).send('User ID already exists');

    const newUser = new User({ id, name }); // <-- Use user-supplied ID
    await newUser.save();
    res.status(201).json(newUser);
});

// STEP 4: Update using manual `id`
app.put('/users/:id', async (req, res) => {
    try {
        const updatedUser = await User.findOneAndUpdate(
            { id: parseInt(req.params.id) }, // <-- Use custom id
            req.body,
            { new: true }
        );
        if (!updatedUser) return res.status(404).send('User not found');
        res.json(updatedUser);
    } catch (err) {
        res.status(400).send('Invalid ID');
    }
});

// STEP 5: Delete using manual `id`
app.delete('/users/:id', async (req, res) => {
    try {
        const deletedUser = await User.findOneAndDelete({ id: parseInt(req.params.id) }); // <-- Use custom id
        if (!deletedUser) return res.status(404).send('User not found');
        res.status(204).send();
    } catch (err) {
        res.status(400).send('Invalid ID');
    }
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
    console.log(`Swagger docs available at http://localhost:${PORT}/api-docs`);
});
