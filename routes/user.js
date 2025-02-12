const { Router } = require("express");
const userRouter = Router();
const { userModel } = require("../db");
const jwt = require("jsonwebtoken");
const JWT_SECRET = process.env.JWT_SECRET_USERS;


userRouter.post("/signup", async function(req,res){
    const { email, password, firstName, lastName } = req.body;
    // TODO: adding zod Validation
    // TODO: hash the password and store in DB
    // TODO: try to catch the error make Backend more robust -done

    try {
        await userModel.create({
            email : email,
            password : password,
            firstName : firstName,
            lastName : lastName
        })
    } catch (e) {
        console.log("error : " + e );
        res.status(401).json({
            message : "User Already Signup"
        })
        return;
    }

    res.json({
        message : "signup endpoint"
    })
});

userRouter.post("/login", async function(req,res){
    const { email , password } = req.body;
    const user = await userModel.find({
        email : email,
        password : password
    });

    if ( user ){
        const token = jwt.sign({
            id : user._id
        },JWT_SECRET);
        res.json({
            token : token,
            message : "signin endpoint"
        })
    } else{
        res.json({
            message : "invalid credintials"
        })
    }
});

userRouter.get("/purchases", function(req,res){
    res.json({
        message : "user purchased course endpoint"
    })
})

module.exports = {
    userRouter : userRouter
}