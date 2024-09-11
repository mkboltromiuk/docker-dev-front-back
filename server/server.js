const express = require('express');
const path = require('path');
const fs = require('fs'); // Moduł File System
const cors = require('cors');

const app = express();
const PORT = 3000;

app.use(cors());

app.use(express.json());

let message = [];

// Przykładowa trasa API
app.post('/api/message', (req, res) => {
    const receivedData = req.body; // Odbieranie danych z żądania
    console.log('Odebrane dane:', receivedData);
    message.push(receivedData);
});

app.delete('/api/message', (req, res) => {});

app.get('/api/message', (req, res) => {
    res.status(200).json({ data: message });
});

app.get('/', (req, res) => {
    res.status(200).json({ data: message });
});

// Uruchomienie serwera
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
