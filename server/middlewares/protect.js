const User = require('../models/userModel')
const jwt = require('jsonwebtoken')


exports.Protect = (req, res, next) => {
    try {
        let token = req.headers['authorization']
        if (token.includes('Bearer')) {
            token = token.split(" ")[1]
        }
        const verifyToken = jwt.verify(token, process.env.JWT_SECRET)
        req.userId = verifyToken.sub
        next()
    } catch (error) {
        console.log(error)
        res.status(500).json({ msg: "unvalid token" })
    }
}