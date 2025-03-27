const express = require('express');
const cors = require('cors');
const app = express();
const PORT = 3000;

app.use(express.json()); // Middleware to parse JSON requests
app.use(cors()); // Enable CORS to allow cross-origin requests

app.get('/', (req, res) => {
    res.send('Server is running!');
});

app.post('/message', (req, res) => {
    console.log('Received message:', req.body);
    res.json({ status: 'Message received successfully', data: req.body });
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
