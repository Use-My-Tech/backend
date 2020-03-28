const jwt = require("jsonwebtoken")

module.exports = {
    authenticate
}

function authenticate(req, res, next) {
    const token = req.headers.authorization
    if(token) {
        jwt.verify(token, process.env.JWT_SECRET, (err) => {
            if(err) {
                res.status(401).end() 
            } else {
                next()
            }
        })
    } else {
        res.status(401).end()
    }
}