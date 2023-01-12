const Patient = require('../models/patientModel')

exports.createPatient = async (req, res) => {
    try {
        const newPatient = await Patient.create(req.body)
        res.json(newPatient)
    } catch (error) {
        console.log(error)
        res.status(500).json({ msg: "something went wrong" })
    }
}

exports.getPatients = async (req,res)=>{
    try {
       const  patientList = await Patient.find()
       res.json(patientList)
    } catch (error) {
        console.log(error)
        res.status(500).json({msg:"something went wrong"})
    }
}

exports.updatePatient = async (req,res)=>{
    try {
       const updatedPatient = await Patient.findByIdAndUpdate(req.params.patientId,req.body,{new:true})
       res.json(updatedPatient) 
    } catch (error) {
        console.log(error)
        res.status(500).json({msg:"something went wrong"})
    }
}

exports.deletePatient = async (req,res)=>{
    try {
        const deletePatient = await Patient.findByIdAndDelete(req.params.patientId)
        res.json(deletePatient)
    } catch (error) {
        console.log(error)
        res.status(500).json({msg:"something went wrong"})
    }
}