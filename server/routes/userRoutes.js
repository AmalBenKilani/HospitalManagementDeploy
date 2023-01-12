const express = require('express')
const { createNewUser, loginUser, getUserData, getUserById } = require('../controllers/userControllers')
const { Protect } = require('../middlewares/protect')
const router = express.Router()

router.post('/register', createNewUser)
router.post('/login',loginUser)
router.get('/userData',Protect,getUserData)
router.get('/:userId',getUserById)
module.exports = router