const express = require('express');

const routes = express.Router();

routes.post('/users', (request, response) => {
  const body = request.body;

  return response.json({
    evento: 'Semana Omini',
    aluno: 'Eduardo'
  })
})

module.exports = routes;