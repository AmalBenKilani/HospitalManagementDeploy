const express = require("express")
const { addMsg, getMsgs } = require("../controllers/messageControllers")

const router = express.Router()
router.post('/',addMsg)
router.get('/:chatId',getMsgs)

module.exports=router