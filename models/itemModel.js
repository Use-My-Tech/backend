const db = require("../data/db-config")

module.exports = {
    findAll,
    findById
}

function findAll() {
    return db("Items")
}

function findById(id) {
    return db("Items").where({id})
}