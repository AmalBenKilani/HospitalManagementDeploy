const express = require('express')
const { createNewAppointment, getAppointments, getAppointmentByDoctorId, getAppointmentById, updateAppointment, deleteAppointment } = require('../controllers/appointmentControllers')
const verifyAppointmentOwner = require('../middlewares/verifyAppointmentOwner')
const router = express.Router()

router.post('/', createNewAppointment)
router.get('/', getAppointments)
router.get('/:doctorId', getAppointmentByDoctorId)
router.get('/appointment/:appointmentId', getAppointmentById)
router.put('/update/:appointmentId', updateAppointment)
router.delete('/delete/:appointmentId',deleteAppointment)
module.exports = router