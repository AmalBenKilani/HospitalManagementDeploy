const express = require('express')
const { createPatient, getPatients, updatePatient, deletePatient } = require('../controllers/patientControllers')
const router = express.Router()

router.post('/',createPatient)
router.get('/',getPatients)
router.put('/update/:patientId',updatePatient)
router.delete('/delete/:patientId',deletePatient)

module.exports=router