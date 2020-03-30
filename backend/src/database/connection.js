const knex = require('knex');
const configuration = require('../../knexfile');

const connection = knex(configuration.development);
console.log("connection", connection)

module.exports = connection;