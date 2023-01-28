const courseModel = require('../models/course')

const Approval = async function(req,res){
    try {
        courseId = req.params.courseId
        const data = await courseModel.findByIdAndUpdate({courseId},{$set:{isApproved: true},approvedAt: new Date()},{new: true})
        res.status(200).send({status: true, message: "Course approved", data : data})
    } catch (error) {
        res.status(500).send({status: false, message: error.message})
    }
}


module.exports = {Approval}
