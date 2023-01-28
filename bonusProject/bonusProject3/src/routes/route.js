const express = require('express')
const router = express.Router()
const employeeController = require('../controllers/employeeController')
const adminController = require('../controllers/adminController')
const superAdminController = require('../controllers/superAdminController')


router.post('/signUp', employeeController.signUp)
router.post('/signIn', employeeController.signIn)
router.get('/course/:courseId',employeeController.getDetail)
router.post('/createCourse',adminController.create )
router.put('/course/:courseId',adminController.create )
router.delete('/course/:courseId', adminController.deleteData)
router.put('/course/:courseId',superAdminController.Approval )



module.exports = router