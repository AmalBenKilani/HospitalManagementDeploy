const Appointment = require("../models/appointmentModel");
const Patient = require("../models/patientModel");

const verifyAppointmentOwner = async (req, res, next) => {
    try {
        const appointment = await Appointment.findById(req.params.appointmentId);
        const PatientList = await Patient.find();
        const findPatient = PatientList.filter(
            (p) => p._id === appointment.patientName._id
        );
        console.log(findPatient);
        if (findPatient) return next();
        else {
            return res
                .status(401)
                .json({ msg: "you are not authorized to do this action" });
        }
    } catch (error) {
        console.log(error);
        res.status(500).json({ msg: "something went wrong" });
    }
};

module.exports = verifyAppointmentOwner;
