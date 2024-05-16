const express = require("express");
const { courseModel } = require("../models/course");
const router = express.Router();


router.post("/add_course",async(req,res)=>{
    const {course_id,course_name,price,description,author} = req.body;

    const newCourse = new courseModel({
        course_id,
        course_name,
        price,
        description,
        author
    })

    await newCourse.save();
    return res.json({status:true,message:"course added"});
})

router.get("/get_courses",async(req,res)=>{
    const data = await courseModel.find();
    return res.json(data);
})

router.post("/update_course",async(req,res)=>{
    const {id,update,delete_post,updated} = req.body;
    console.log(updated)
    if(delete_post) {
        await courseModel.findByIdAndDelete({_id:id});
        return res.json({message:"delete successful"});
    }
    else if (update) {
        const { course_id, author, course_name, description, price } = updated;
        await courseModel.findByIdAndUpdate({_id:id},{course_id,
            author,
            course_name,
            description,
            price});
        return res.json({message:"update successful"});
    }
})

router.get("/working",(req,res)=>{
    return res.json({message:"working fine"});
})

module.exports = router;