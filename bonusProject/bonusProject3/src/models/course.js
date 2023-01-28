const mongoose = require('mongoose')

const courseModel = new mongoose.Schema({
    
    title: {
        type: String,
        required: true
    }, 
    description:{
         type: String,
         required: true
    }, 
    video : {
        type: String,
        required: true
    },
    topics: [String],
    duration: {
        type: Number
    },
    category: {
        type: String
    },
    isDeleted: {
        type: Boolean,
        default: false
    },
    
    deletedAt: Date,

    isApproved: {
        type: Boolean,
        default: false
    },
    approvedAt: {
        type: Date
    }
})

module.exports = mongoose.model('course', courseModel)