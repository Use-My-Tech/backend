const knex = require("knex")

const configs = require("../knexfile")

const environment = process.env.DB_ENV

module.exports = knex(configs[environment])