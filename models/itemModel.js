const db = require("../data/db-config")

module.exports = {
    findAll,
    findById,
    add,
    remove,
    update
}

function findAll() {
    return db("Items")
}

function findById(id) {
    return db("Items").where({id}).first()
}

function add(item) {
    return db("Items").insert(item)
}

function remove(id) {
    return db("items").del().where({id})
}

function update(id, change) {
    return db("items").update(change).where({id})
}