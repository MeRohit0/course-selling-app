const { Router } = require("express");

const userRouter = Router();

userRouter.post("/signup", function(req,res){
    res.json({
        message : "signup endpoint"
    })
});

userRouter.post("/login", function(req,res){
    res.json({
        message : "signin endpoint"
    })
});

userRouter.get("/purchases", function(req,res){
    res.json({
        message : "user purchased course endpoint"
    })
})

module.exports = {
    userRouter : userRouter
}