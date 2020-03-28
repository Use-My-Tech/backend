const db = require("../data/db-config")

module.exports = {
    add,
    remove
}

function add(user) {
    return db("Users").insert(user)
}

function remove(id) {
    return db("Users").del().where({id})
}