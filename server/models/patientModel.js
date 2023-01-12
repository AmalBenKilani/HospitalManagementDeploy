const mongoose = require('mongoose')

const patientSchema = mongoose.Schema({
    Name: {
        type: String,
        required: true,
    },
    Gender: {
        type: String,
        required: true,
    },
    Age: {
        type: Number,
        required: true,
    },
    BloodGroup: {
        type: String,
        required: true,
    },
    Mobile: {
        type: String,
        required: true,
    },
    City: {
        type: String,
        required: true,
    },
    Date: {
        type: String ,
        required: true,
    }
})
module.exports = mongoose.model('Patient', patientSchema)