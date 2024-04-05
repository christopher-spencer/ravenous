require('dotenv').config();

const express = require('express');
const axios = require('axios');
const bodyParser = require('body-parser');
const cors = require('cors');
const CircularJSON = require('circular-json');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

app.get('/api/yelp', (req, res) => {
  const { term, location, sortBy } = req.query;
  const apiKey = process.env.YELP_API_KEY;

  axios.get(`https://api.yelp.com/v3/businesses/search?term=${term}&location=${location}&sort_by=${sortBy}`, {
    headers: {
      Authorization: `Bearer ${apiKey}`,
    },
  })
  .then(response => {
    res.send(CircularJSON.stringify(response.data));
  })
  .catch(error => {
    console.error('Error fetching data from Yelp API:', error);
    res.status(500).send('Internal Server Error');
  });
});


app.listen(PORT, () => {
  console.log(`Proxy server running on port ${PORT}`);
});
