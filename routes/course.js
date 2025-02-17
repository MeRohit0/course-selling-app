const { Router } = require("express");

const courseRouter = Router();
const { userAuth } = require("../middleware/userAuth");
const { purchaseModel , courseModel } = require("../db");
const { coursePostPurchase } = require("../middleware/courseInputValidation");

courseRouter.post("/purchase", userAuth, coursePostPurchase, async function(req,res){

    const userId = req.userId;
    const courseId = req.body.courseId;

    const purchase = await purchaseModel.create({
        courseId ,
        userId 
    })

    res.json({
        message : "You have successfully brought the course",
        purchase
    })
});

courseRouter.get("/preview", async function(req,res){

    const courses = await courseModel.find({});
    res.json({
        message : "all courses",
        courses
    })
});

module.exports = {
    courseRouter : courseRouter
}