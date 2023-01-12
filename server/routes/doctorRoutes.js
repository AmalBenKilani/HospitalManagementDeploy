const express = require('express')
const { addNewDoctor, getDoctors, updateDoctor, deleteDoctor } = require('../controllers/doctorControllers')
const router = express.Router()
const multer = require('multer')

const storage = multer.diskStorage({
    destination: 'uploads/',

    filename: function (req, file, cb) {
            cb(null,Date.now() + '-' + file.originalname )
    }
  })
  
  const upload = multer({ storage: storage })

router.post('/',upload.single('image'),addNewDoctor)
router.get('/',getDoctors)
router.put('/update/:doctorId',updateDoctor)
router.delete('/delete/:doctorId',deleteDoctor)
module.exports=router