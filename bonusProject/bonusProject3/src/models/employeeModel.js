const mongoose = require('mongoose')

const employeeModel = new mongoose.Schema({
    
    name: {
        type: String,
        required: true
    }, 
    email:{
         type: String,
         required: true
    }, 
    password: {
        type: String,
        required: true
    },
        // (encrypted)
    role: {
        type: String,
        default: "Employee"
    }
})

module.exports = mongoose.model('employee', employeeModel)