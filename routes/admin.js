const express = require("express");
const adminRouter = express.Router();
const { adminModel } = require("../db");

adminRouter.post("/login" , function(req, res){
    res.json({
        message : "admin login endpoint"
    })
})

adminRouter.post("/signup" , function(req,res){
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