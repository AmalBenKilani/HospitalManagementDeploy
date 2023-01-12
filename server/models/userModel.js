const mongoose = require('mongoose')

const userSchema = mongoose.Schema({
    email: {
        type: String,
        unique: true,
        required: true
    },
    password: {
        type: String,
        unique: true,
        required: true
    },
    role: {
        type: String,
        default: 'Patient',
        enum: ['Admin', 'Patient', 'Doctor']
    }
})


module.exports = mongoose.model('User', userSchema)