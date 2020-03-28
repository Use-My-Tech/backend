const db = require("../data/db-config")

module.exports = {
    findBy,
    add,
    remove
}

function findBy(filter) {
    return db("Users").where(filter).first()
}

function add(user) {
    return db("Users").insert(user)
}

function remove(id) {
    return db("Users").del().where({id})
}