const User = require('../models/userModel')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')

exports.createNewUser = async (req, res) => {
    try {
        const checkUser = await User.findOne({ email: req.body.email })
        if (checkUser?.email === req.body.email) return res.status(500).json({ msg: "email already exist" })
        const hashPassword = await bcrypt.hash(req.body.password, 10)
        const newUserCreated = await User.create({ ...req.body, password: hashPassword })
        res.json(newUserCreated)
    } catch (error) {
        console.log(error)
        res.status(500).json({ msg: "something went wrong" })
    }
}

exports.loginUser = async (req, res) => {
    try {
        const findUser = await User.findOne({ email: req.body.email })
        if (!findUser) return res.status(500).json({ msg: "email does not exist" })
        const validatePwd = await bcrypt.compare(req.body.password, findUser.password)
        if (!validatePwd) return res.status(500).json({ msg: "wrong password" })
        const token = jwt.sign({
            sub: findUser._id,
            email: findUser.email
        }, process.env.JWT_SECRET, { expiresIn: '1d' })
        res.json({ token, userData: findUser })
    } catch (error) {
        console.log(error)
        res.status(500).json({ msg: "something went wrong" })
    }
}

exports.getUserData = async (req, res) => {
    try {
        const userInfo = await User.findById(req.userId)
        res.json(userInfo)
    } catch (error) {
        console.log(error)
        res.status(500).json({ msg: "something went wrong" })
    }
}

exports.getUserById = async(req,res)=>{
    try {
        const user = await User.findById(req.params.userId)
        res.json(user)
    } catch (error) {
        console.log(error)
        res.status(500).json({ msg: "something went wrong" })
    }
}