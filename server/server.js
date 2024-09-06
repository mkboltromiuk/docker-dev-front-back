const express = require('express');
const path = require('path');

const cors = require('cors');

const app = express();
const PORT = 3000;

app.use(cors());

// Przykładowa trasa API
app.get('/api/message', (req, res) => {
    res.json({ message: 'Hello from Express!' });
});

// Uruchomienie serwera
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
