const authRouter = require("express").Router()
const bc = require("bcryptjs")
const MD = require("../models/userModel")
const jwt = require("jsonwebtoken")

authRouter.post("/register", (req, res) => {
    const user = req.body
    user.password = bc.hashSync(user.password, 12)
    MD.add(user)
    .then(response => {
        res.status(201).json(response)
    })
    .catch(() => {
        res.status(500).json({error: "there must be a problem with the server"})
    })
})

authRouter.post("/login", (req, res) => {
    const {username, password} = req.body
    
    MD.findBy({username})
    .then(user => {
      if(user && bc.compareSync(password, user.password)) {
        const payload = {
            sub: user.id,
            username: user.username
        }
        const options = {
            expiresIn: "1d"
        }
        const token = jwt.sign(payload, process.env.JWT_SECRET, options)
        res.status(200).json({token})
      } else {
          res.status(401).end()
      }   
    })
    .catch(() => {
        res.status(500).json({error: "there must be a problem with the server"})
    })
})

module.exports = authRouter