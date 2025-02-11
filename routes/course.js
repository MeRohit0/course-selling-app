const { Router } = require("express");

const courseRouter = Router();

courseRouter.post("/purchase", function(req,res){
    // buy endpoint for course purchase 
    res.json({
        message : "user purchasing courses endpoint"
    })
});

courseRouter.get("/preview", function(req,res){
    res.json({
        message : "all courses endpoint"
    })
});

module.exports = {
    courseRouter : courseRouter
}