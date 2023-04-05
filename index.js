const express = require('express');
const cors = require('cors');
const fetch = require('node-fetch');

const app = express();

app.use(cors());

app.get('/*', async (req, res) => {
  try {
    const targetUrl = req.url.slice(1);
    const response = await fetch(targetUrl);
    const data = await response.text();
    res.send(data);
  } catch (error) {
    console.error('Error fetching:', error);
    res.status(500).send('Error fetching data');
  }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`CORS proxy server listening on port ${PORT}`));
