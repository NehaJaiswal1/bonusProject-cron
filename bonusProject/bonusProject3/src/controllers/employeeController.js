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
        let token = jwt.sign({ _id: employeeId }, "neha", { expiresIn: "1h" })
        res.status(200).send({ status: true, data: token })
    } catch (error) {
        res.status(500).send({status: false, message: error.message})
    }

}


const getDetail = async function(req,res){
    try {
        let { title, description, video, topic, category } = req.query;
        if(Object.keys(req.query).length == 0){
          return res.status(400).send({msg : "Querry is Required"})
        }
        let filter = { isDeleted: false, isApproved: true }
        if (title) { filter.title = title }
        if(description){filter.description = description}
        if (category) { filter.category = category }
        if (video) { filter.video = video }
        if (topic) { filter.topic = topic }
        let savedData = await blogModel.find(filter)
        if (savedData.length == 0) {
            return res.status(404).send({ status: false, msg: "Such Blogs Not Available" })
        } else {
            return res.status(200).send({ status: true, data: savedData })
        }
    } catch (error) {
        res.status(500).send({status: false, message: error.message})
    }
}

module.exports = { signUp, signIn, getDetail }