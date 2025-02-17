const { Router } = require("express");
const userRouter = Router();
const { userModel , purchaseModel } = require("../db");
const jwt = require("jsonwebtoken");
const JWT_SECRET = process.env.JWT_SECRET_USERS;
const { userAuth } = require("../middleware/userAuth");
const { userPostSignup, userPostLogin} = require("../middleware/userInputValidationCheck");

userRouter.post("/signup", userPostSignup, async function(req,res){
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
        res.status(403).json({
            message : "User Already Signup"
        })
        return;
    }

    res.json({
        message : "signup endpoint"
    })
});

userRouter.post("/login", userPostLogin, async function(req,res){
    const { email , password } = req.body;
    const user = await userModel.findOne({
        email : email,
        password : password
    });

    if ( user ){
        
        const token = jwt.sign({
            id : user._id
        }, JWT_SECRET);

        res.json({
            token : token,
            message : "signin endpoint"
        })
    } else{
        res.status(403).json({
            message : "invalid credintials"
        })
    }
});

userRouter.get("/purchases", userAuth, async function(req,res){
    const userId = req.userId;
    const purchaseCourses = await purchaseModel.find({
        userId : userId
    });
    res.json({
        message : "user purchased course endpoint",
        purchaseCourses
    })
});

module.exports = {
    userRouter : userRouter
}