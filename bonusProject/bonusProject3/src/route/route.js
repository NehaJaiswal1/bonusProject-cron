const express = require('express')
const route = express.Router()
const employeeController = require('../controllers/employeeController')



route.post('/signUp', employeeController.signUp)
route.post('/signIn', employeeController.signIn)
route.

module.exports = {route}