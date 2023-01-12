const mongoose = require('mongoose')

const doctorSchema = mongoose.Schema({
       Name: {
        type: String,

    },
    Gender: {
        type: String,

    },
    Departement: {
        type: String,

    },
    Email: {
        type: String,

    },
    Mobile: {
        type: String,

    },
    City: {
        type: String,

    },
    Date: {
        type: String,

    },
    Image: {
        type: String,
        default: 'https://www.shareicon.net/data/512x512/2016/08/18/813844_people_512x512.png'
    }
})

module.exports = mongoose.model('Doctor', doctorSchema)