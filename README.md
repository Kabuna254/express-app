# Middleware
## Step 1: Creating Routes
**a.Basic Static Route**
const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send('Welcome to Express.js Routing!');
});

app.listen(3000, () => {
    console.log('Server running on port 3000');
});
**Using Route Parameters**
Route parameters are used to pass values dynamically within the URL.

app.get('/user/:id', (req, res) => {
    res.send(`User ID: ${req.params.id}`);
});

**Handling Query Parameters**
Query parameters are used to send optional parameters with a request.

app.get('/search', (req, res) => {
    const query = req.query.q;
    res.send(`Search results for: ${query}`);
});