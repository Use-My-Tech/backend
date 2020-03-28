const knex = require("express")

const configs = require("../knexfile")

const environment = process.env.DB_ENV

module.exports = knex(configs[environment])