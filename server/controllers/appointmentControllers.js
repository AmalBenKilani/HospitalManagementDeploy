const Appointment = require('../models/appointmentModel')
const Patient = require('../models/patientModel')

exports.createNewAppointment = async (req, res,) => {
    const newStart = new Date(req.body.start)
    const newEnd = new Date(req.body.end)
    const newBody = { ...req.body, start: newStart, end: newEnd }
      try {
        const newAppointment = await Appointment.create(newBody)
        res.json(newAppointment)
    } catch (error) {
        console.log(error)
        res.status(500).json({ msg: "something went wrong" })
    }
}
exports.getAppointments = async (req, res) => {
    try {
        const AppointmentList = await Appointment.find()
        res.json(AppointmentList)
    } catch (error) {
        console.log(error)
        res.status(500).json({ msg: "something went wrong" })
    }
}


exports.getAppointmentByDoctorId = async (req, res) => {
    try {
        const AppointmentList = await Appointment.find({ doctorName: req.params.doctorId }).populate('patientName').populate('departement').populate('doctorName')
        res.json(AppointmentList)
    } catch (error) {
        console.log(error)
        res.status(500).json({ msg: "something went wrong" })
    }
}

exports.getAppointmentById = async (req, res) => {
    try {
        const AppointmentList = await Appointment.findById(req.params.appointmentId)
        res.json(AppointmentList)
    } catch (error) {
        console.log(error)
        res.status(500).json({ msg: "something went wrong" })
    }
}
exports.updateAppointment = async (req, res) => {
  
    try {
        const updatesAppointment = await Appointment.findByIdAndUpdate(req.params.appointmentId, req.body, { new: true })
        res.json(updatesAppointment)
        console.log(updatesAppointment)
    } catch (error) {
        console.log(error)
        res.status(500).json({ msg: "something went wrong" })
    }
}
exports.deleteAppointment = async (req, res) => {
    try {
        const deletedAppointment = await Appointment.findByIdAndDelete(req.params.appointmentId)
        res.json(deletedAppointment)
    } catch (error) {
        console.log(error)
        res.status(500).json({ msg: "something went wrong" })
    }
}