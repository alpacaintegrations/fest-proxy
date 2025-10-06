const express = require('express');
const cors = require('cors');
const axios = require('axios');
const https = require('https');

const app = express();
app.use(cors());

const agent = new https.Agent({
  rejectUnauthorized: false
});

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
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Proxy running on port ${PORT}`));