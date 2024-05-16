const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const CourseSchema = new Schema({
    course_id:{
        type: String,
        unique: true,
        required: true
    },
    course_name: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        default: 0
    },
    description: {
        type: String,
        default: ""
    },
    no_of_users: {
        type: Number,
        default: 0
    },
    author: {
        type: String,
        required: true
    }
  });

const courseModel = mongoose.model("Course", CourseSchema);

module.exports = {courseModel};