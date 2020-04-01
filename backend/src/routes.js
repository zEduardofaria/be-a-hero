const express = require('express');
const crypto = require('crypto');
const axios = require('axios');

const routes = express.Router();

routes.post('/devs', async (request, response) => {
  const { github_username } = request.body;

  const resp = await axios.get(`https://api.github.com/users/${github_username}`)

  console.log(resp.data)

  return response.json({ status: 200 })
})

module.exports = routes;