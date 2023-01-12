const Doctor = require('../models/doctorModel')


exports.addNewDoctor = async (req, res) => {
    const newBody = JSON.parse(req.body.info)
    try {
        const imagePath = `http://localhost:8000/uploads/${req.file.filename}`
        const newDoctor = await Doctor.create({ ...newBody, Image: imagePath })

        res.json(newDoctor)
    } catch (error) {
        console.log(error)
        res.status(500).json({ msg: "something went wrong" })
    }
}

exports.getDoctors = async (req, res) => {
    try {
        const doctorList = await Doctor.find()
        res.json(doctorList)
    } catch (error) {
        console.log(error)
        res.status(500).json({ msg: "something went wrong" })
    }
}

exports.updateDoctor = async (req, res) => {

     console.log(req.body)
    console.log(req.params.doctorId)
    try {
     
        const UpdatedDoctor = await Doctor.findByIdAndUpdate(req.params.doctorId, req.body, { new: true })
        res.json(UpdatedDoctor)
        
    } catch (error) {
        console.log(error)
        res.status(500).json({ msg: "something went wrong" })
    }
}

exports.deleteDoctor = async (req, res) => {
    try {
        const deletedDoctor = await Doctor.findByIdAndDelete(req.params.doctorId)
        res.json(deletedDoctor)
    } catch (error) {
        console.log(error)
        res.status(500).json({ msg: "something went wrong" })
    }
}