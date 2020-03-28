const authRouter = require("express").Router()
const MD = require("../models/userModel")

authRouter.post("/register", (req, res) => {
    const user = req.body
    MD.add(user)
    .then(response => {
        res.status(201).json(response)
    })
    .catch(() => {
        res.status(500).json({error: "there must be a problem with the server"})
    })
})

authRouter.post("/login", (req, res) => {
    MD.findAll()
    .then(response => {
        res.json(response)
    })
    .catch(() => {
        res.status(500).json({error: "there must be a problem with the server"})
    })
})

module.exports = authRouter