const itemRouter = require("express").Router()
const MD = require("../models/itemModel")
const midW = require("../middleware")

itemRouter.get("/", midW.authenticate, (req, res) => {
    MD.findAll()
    .then(response => {
        res.json(response)
    })
    .catch(() => {
        res.status(500).json({error: "there must be a problem with the server"})
    })
})

module.exports = itemRouter