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

itemRouter.get("/:id", midW.authenticate, (req, res) => {
    const {id} = req.params
    MD.findById(id)
    .then(response => {
        res.json(response)
    })
    .catch(() => {
        res.status(500).json({error: "there must be a problem with the server"})
    })
})

itemRouter.delete("/:id", midW.authenticate, (req, res) => {
    const {id} = req.params
    MD.remove(id)
    .then(response => {
        res.status(200).json(response)
    })
    .catch(() => {
        res.status(500).json({error: "there must be a problem with the server"})
    })
})

itemRouter.put("/:id", midW.authenticate, (req, res) => {
    const {id} = req.params
    const change = req.body
    MD.update(id, change)
    .then(response => {
        res.status(200).json(response)
    })
    .catch(() => {
        res.status(500).json({error: "there must be a problem with the server"})
    })
})

module.exports = itemRouter