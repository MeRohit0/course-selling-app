const express = require("express");
const adminRouter = express.Router();
const { adminModel } = require("../db");
const { z } = require("zod");
const jwt = require("jsonwebtoken");
const JWT_SECRET =  process.env.JWT_SECRET_ADMIN;

// bcrypt, zod, jsonwebtoken

adminRouter.post("/login" , async function(req, res){
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

adminRouter.post("/signup" , async function(req,res){
    const { email, password, firstName, lastName } = req.body;
    // TODO: adding zod Validation
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

adminRouter.post("/course", function(req,res){
    res.json({
        message : "admin create course endpoint"
    })
})

adminRouter.put("/course", function(req,res){
    res.json({
        message : "admin update course endpoint"
    })
})

adminRouter.get("/course/bulk", function(req,res){
    res.json({
        message : "admin see courses endpoint"
    })
})

adminRouter.delete("/course", function(req,res){
    res.json({
        message : "admin delete course endpoint"
    })
})

module.exports = {
    adminRouter : adminRouter
}