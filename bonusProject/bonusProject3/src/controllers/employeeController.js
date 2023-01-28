const employeeModel = require('../models/employeeModel')

const signUp = async function (req, res) {
    try {
        let data = req.body
        const createData = await employeeModel.create(data)
        res.status(201).send({ status: true, message: "Succesfully created", data: createData })
        
    } catch (error) {
        res.status(500).send({status: false, message: error.message})
    }
   
}

const signIn = async function (req, res) {
    try {
        let { email, password } = req.body
        const login = await employeeModel.findOne({ email: email, password: password })
        if(!login) return res.status(404).send({status: false, message: "No details found"})
        let token = jwt.sign({ email: email }, "neha", { expiresIn: "1h" })
        res.status(200).send({ status: true, data: token })
    } catch (error) {
        res.status(500).send({status: false, message: error.message})
    }

}

module.exports = { signUp, signIn }