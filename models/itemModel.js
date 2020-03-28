const db = require("../data/db-config")

module.exports = {
    findAll,
    findById,
    add,
    remove
}

function findAll() {
    return db("Items")
}

function findById(id) {
    return db("Items").where({id})
}

function add(item) {
    return db("Items").insert(item)
}

function remove(id) {
    return db("items").del().where({id})
}