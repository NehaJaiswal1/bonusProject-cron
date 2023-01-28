const courseModel = require('../models/course')

const create =  async function(req,res){
    try {
        let data = req.body
        const create = await courseModel.create(data)
        res.status(200).send({status: false, data: create})
    } catch (error) {
        res.status(500).send({status: false, message: error.message})
    }
   
}

const update = async function(req,res){
    try {
        let data = req.body
        const courseId = req.params.courseId;
        const updateData = await courseModel.findOneAndUpdate(
            { _id: courseId },
            {
              $set: {
                title: data.title,
                description: data.description,
                duration: data.duration,
                category: data.category,
                
              },
              $push: { topics: data.topics},
            },
            { new: true }
          );
          res.status(200).send({ status: true, data: updateData });
    } catch (error) {
        res.status(500).send({status: false, message: error.message})
    }
}


const deleteData = async function(req,res){
    try {
        let courseId = req.params.courseId;
    const deletedData = await courseModel.findById(courseId);
    if (deletedData.isDeleted == true) {
      return res
        .status(200)
        .send({ status: false, msg: "Course already deleted" });
    }
    let deletedBlog = await courseModel.findOneAndUpdate(
      { _id: courseId },
      { $set: { isDeleted: true }, deletedAt: new Date() },
      { new: true }
    );
    res.status(200).send({ status: true, data: deletedBlog });
    } catch (error) {
        res.status(500).send({status: false, message: error.message})
    }
}

module.exports = {create, update, deleteData}