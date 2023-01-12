const mongoose = require('mongoose')
const Patient = require('./patientModel')
const Doctor = require('./doctorModel')

const appointmentSchema = mongoose.Schema({
    patientName: {
        type: String,
        ref: "Patient"
    },
    title: {
        type: String,
        required: true
    },
    departement: {
        type: String,
        ref: "Doctor"
    },
    doctorName: {
        type: String,
        ref: "Doctor"
    },
    Problem: {
        type: String,
        required: true
    },
    start: {
        type: String,
        required: true
    },
    end: {
        type: String,
        required: true
    },
    prescription: {
        type: Boolean,
        default: false
    },

})

module.exports = mongoose.model('Appointment', appointmentSchema)