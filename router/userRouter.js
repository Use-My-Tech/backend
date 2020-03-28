const userRouter = require("express").Router()
const MD = require("../models/userModel")
const midW = require("../middleware")

userRouter.get("/:id/items", midW.authenticate, (req, res) => {
    const {id} = req.params

    MD.findItemsById(id)
    .then(response => {
        res.json(response)
    })
    .catch(() => {
        res.status(500).json({error: "there must be a problem with the server"})
    })
})

userRouter.post("/:id/items", midW.authenticate, (req, res) => {
    const item = req.body
    MD.add(item)
    .then(response => {
        res.status(201).json(response)
    })
    .catch(() => {
        res.status(500).json({error: "there must be a problem with the server"})
    })
})

module.exports = userRouter