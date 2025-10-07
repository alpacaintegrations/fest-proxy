const express = require('express');
const cors = require('cors');
const axios = require('axios');
const https = require('https');

const app = express();
app.use(cors());

const agent = new https.Agent({
  rejectUnauthorized: false
});

// Cities endpoint
app.get('/cities', async (req, res) => {
  try {
    const response = await axios.get('https://fest.nl/api/v1/cities', {
      params: { search: req.query.search },
      headers: { 'Authorization': 'Bearer sk-mijn-gpt-abc123' },
      httpsAgent: agent
    });
    res.json(response.data);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});  // <-- Deze sluit cities

// Events endpoint
app.get('/events', async (req, res) => {
  try {
    const response = await axios.get('https://fest.nl/api/v1/events', {
      params: req.query,
      headers: { 
        'Authorization': 'Bearer sk-mijn-gpt-abc123' 
      },
      httpsAgent: agent
    });
    res.json(response.data);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Genres endpoint
app.get('/genres/search', async (req, res) => {
  try {
    const response = await axios.get('https://fest.nl/api/v1/genres/search', {
      params: req.query,
      headers: { 
        'Authorization': 'Bearer sk-mijn-gpt-abc123' 
      },
      httpsAgent: agent
    });
    res.json(response.data);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});
// Provinces endpoint
app.get('/provinces', async (req, res) => {
  try {
    const response = await axios.get('https://fest.nl/api/v1/provinces', {
      params: req.query,
      headers: { 'Authorization': 'Bearer sk-mijn-gpt-abc123' },
      httpsAgent: agent
    });
    res.json(response.data);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Venues endpoint
app.get('/venues', async (req, res) => {
  try {
    const response = await axios.get('https://fest.nl/api/v1/venues', {
      params: req.query,
      headers: { 'Authorization': 'Bearer sk-mijn-gpt-abc123' },
      httpsAgent: agent
    });
    res.json(response.data);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// All genres endpoint
app.get('/genres', async (req, res) => {
  try {
    const response = await axios.get('https://fest.nl/api/v1/genres', {
      headers: { 'Authorization': 'Bearer sk-mijn-gpt-abc123' },
      httpsAgent: agent
    });
    res.json(response.data);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Subgenres endpoint
app.get('/genres/:id/subgenres', async (req, res) => {
  try {
    const response = await axios.get(`https://fest.nl/api/v1/genres/${req.params.id}/subgenres`, {
      headers: { 'Authorization': 'Bearer sk-mijn-gpt-abc123' },
      httpsAgent: agent
    });
    res.json(response.data);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Proxy running on port ${PORT}`));
