const express = require('express');
const crypto = require('crypto');

const routes = express.Router();

routes.post('/', async (request, response) => {
  const { name, email, whatsapp, city, uf } = request.body;

  return response.json({ id })
})

module.exports = routes;