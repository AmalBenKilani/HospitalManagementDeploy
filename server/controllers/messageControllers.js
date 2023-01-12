const Message = require('../models/messageModel')

exports.addMsg = async (req, res) => {
    const { chatId, senderId, text } = req.body
    const message = new Message({
        chatId,
        senderId,
        text
    })
    try {
        const result = await message.save()
        res.status(200).json(result)
    } catch (error) {
        console.log(error)
        res.status(500).json({ msg: "something went wrong" })
    }
}

exports.getMsgs = async (req, res) => {
    const { chatId } = req.params
    try {
        const result = await Message.find({ chatId })
        res.status(200).json(result)
    } catch (error) {
        console.log(error)
        res.status(500).json({ msg: "something went wrong" })
    }
}