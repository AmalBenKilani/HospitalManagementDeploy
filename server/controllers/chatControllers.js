const Chat = require('../models/chatModel')

exports.createChat = async (req, res) => {
    const newChat = new Chat({
        members: [req.body.senderId, req.body.receiverId]
    })
    try {
        const result = await newChat.save()
        res.status(200).json(result)

    } catch (error) {
        console.log(error)
        res.status(500).json({ msg: "something went wrong" })
    }
}
exports.userChats = async (req, res) => {
    try {
        const chat = await Chat.find({
            members: { $in: [req.params.userId] }
        })
        res.status(200).json(chat)
    } catch (error) {
        console.log(error)
        res.status(500).json({ msg: "something went wrong" })
    }
}
exports.findChat = async (req, res) => {
    try {
        const chat = await Chat.findOne({
            members: { $all: [req.params.firstId, req.params.secondId] }
        })
        res.status(200).json(chat)
    } catch (error) {
        console.log(error)
        res.status(500).json({ msg: "something went wrong" })
    }
}