//dependencies
const express = require("express")
const cors = require("cors")
const helmet = require("helmet")
//routers
const authRouter = require("./router/authRouter")
const itemRouter = require("./router/itemRouter")

const server = express()

server.use(express.json())
server.use(cors())
server.use(helmet())
server.use("/api", authRouter)
server.use("/api/items", itemRouter)

server.get("/", (req, res) => {
    res.json({api: "is up"})
})

module.exports = server