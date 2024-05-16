const express = require("express");
const app = express();
const mongoose = require("mongoose");
require('dotenv').config();
const mongoDB = process.env.DATABASE;
const port = process.env.PORT;
// console.log(process.env.DATABASE);
const  CourseRouter = require("./Routes/course_route");
const cors = require("cors");

app.use(express.urlencoded({extended: true}));

async function make_connection() {
    await mongoose.connect(mongoDB);
    console.log("connection to data base success");
}

make_connection().catch((err)=>console.log(err));

app.use(express.json());
app.use(cors());
app.use('/course',CourseRouter);
app.listen(port,()=>{
    console.log("server started",port);
})