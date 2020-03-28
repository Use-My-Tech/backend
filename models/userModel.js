const db = require("../data/db-config")

module.exports = {
    findBy,
    findItemsById,
    add,
    remove
}

function findBy(filter) {
    return db("Users").where(filter).first()
}

function findItemsById(id) {
    return db.select("Items.*").from("Users").join("Items", "Items.user_id", "=", "Users.id").where("Users.id", id)
}

function add(user) {
    return db("Users").insert(user)
}

function remove(id) {
    return db("Users").del().where({id})
}