const jwt = require("jsonwebtoken");
const courseModel = require("../models/course");
const mongoose = require("mongoose");
const course = require("../models/course");



const loginCheck = async function (req, res, next) {
  try {
    const hData = req.headers["x-api-key"];
    if (!hData) {
      return res
        .status(400)
        .send({ status: false, msg: `headers is missing in request` });
    }
    const decodedToken = jwt.verify(
      hData,
      "neha",
      (err, decodedToken) => {
        if (err) {
          return res.status(400).send({ status: false, msg: err.message });
        } else {
          req.decodedToken = decodedToken;
          next();
        }
      }
    );
  } catch (error) {
    res.status(500).send({ status: false, Error: error.message });
  }
};



const authorise = async function (req, res, next) {
  try {
    const authorId = req.decodedToken.authorid;
    let courseId = req.params.courseId;
    if (!mongoose.Types.ObjectId.isValid(blogId)) {
      return res
        .status(404)
        .send({ status: false, msg: "Blog Id is incorrect" });
    }
    let course = await blogModel.findOne({ _id: courseId });
    
    if (!course) {
      return res.status(404).send({ msg: "blogId does not exist" });
    }
    let extAuthId = course.courseId;
    if (authorId != extAuthId) {
      return res.send({
        status: false,
        msg: "You are not allowed to modify other's data",
      });
    }
    next();
  } catch (error) {
    res.status(500).send({ status: false, Error: error.message });
  }
};

module.exports = {loginCheck, authorise}
