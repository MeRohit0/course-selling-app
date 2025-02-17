const express = require("express");
const adminRouter = express.Router();
const { adminModel } = require("../db");
const { courseModel } = require("../db");
const { z } = require("zod");
const jwt = require("jsonwebtoken");
const JWT_SECRET =  process.env.JWT_SECRET_ADMIN;
const { adminAuth } = require("../middleware/adminAuth");
const { adminPostLogin, adminPostSignup, adminPostCourse, adminPutCourse } = require("../middleware/adminInputValidationCheck");


// bcrypt, zod

adminRouter.post("/login" , adminPostLogin, async function(req, res){
    const { email , password } = req.body;
    const admin = await adminModel.findOne({
        email : email,
        password : password
    });

    if ( admin ){

        const token = jwt.sign({
            id : admin._id
        }, JWT_SECRET);

        res.json({
            token : token,
        })
    } else{
        res.status(403).json({
            message : "invalid credintials"
        })
    }
})

adminRouter.post("/signup" , adminPostSignup, async function(req,res){
    const { email, password, firstName, lastName } = req.body;
    // TODO: adding zod Validation -done
    // TODO: hash the password and store in DB

    try {
        await adminModel.create({
            email : email,
            password : password,
            firstName : firstName,
            lastName : lastName
        })
    } catch (e) {
        console.log("error : " + e );
        res.status(403).json({
            message : "admin Already Signup"
        })
        return;
    }
    res.json({
        message : "admin signup endpoint"
    })
})

adminRouter.post("/course", adminAuth, adminPostCourse ,async function(req,res){
    const { title, description, price, imageUrl} = req.body;
    const adminId = req.userId;
    let courseId;
    try{
        const course = await courseModel.create({
            title: title,
            description : description,
            price : price,
            imageUrl : imageUrl,
            creatorId : adminId
        })
        courseId = course._id;

    }catch(e){
        console.log("error is : " + e);
        res.status(500).json({
            message : "some error in db"
        })
    }

    res.json({
        message : "course created",
        courseId : courseId
    })
})

adminRouter.put("/course", adminAuth, adminPutCourse, async function(req,res){
    const { title, description, price, imageUrl, courseId} = req.body;
    const adminId = req.userId;
    let updateData ;
    try{
    updateData =  await courseModel.updateOne({
        _id : courseId,
        creatorId : adminId
    },
    {
        title: title,
        description : description,
        price : price,
        imageUrl : imageUrl,
    })
    }catch( e ){
        console.log("error is : " + e);
        res.status(500).json({
            message : "some error in db"
        })
        return;
    }
    res.json({
        message : "course updated",
        courseId : courseId,
        updateData :  updateData
    })
})

adminRouter.get("/course/bulk", adminAuth, async function(req,res){
    const userId  = req.userId;
    const course = await courseModel.find({
        creatorId : userId
    })
    res.json({
        message : "all courses",
        course : course
    })
})

adminRouter.delete("/course", adminAuth, async function(req,res){
    const userId = req.userId;
    const  courseId  = req.body.courseId;
    const course = await courseModel.deleteOne({
        _id : courseId,
        creatorId : userId
    })

    res.json({
        message : "delete course",
        course : course
    })
})

module.exports = {
    adminRouter : adminRouter
}