const e = require('express');
const express = require('express');
const fetch = require('node-fetch');

const API_URL = "https://jsonplaceholder.typicode.com/users"

const router = express.Router()

router.get('/api/users', async (req, res) => {
  const url = API_URL;
  const options = {
    "method": "GET"
  }

  const responce = await fetch(url)
  .then(res => res.json())
  .catch(e => console.log(e));

  res.json(responce)
})

module.exports = router;
