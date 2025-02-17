// input validation check for user routes 
const { userRouterPostSignup , userRouterPostLogin } = require("./type");

function userPostSignup(req,res,next){
    const status = userRouterPostSignup.safeParse({
        email : req.body.email, 
        password : req.body.password, 
        firstName : req.body.firstName, 
        lastName : req.body.lastName
    })

    if(!status.success){
        res.status(403).json({
            message : "Input parameters not valid"
        })
    }else{
        next();
    }
}

function userPostLogin(req,res,next){
    const status = userRouterPostLogin.safeParse({
        email : req.body.email, 
        password : req.body.password
    })

    if(!status.success){
        res.status(403).json({
            message : "Input parameters not valid"
        })
    }else{
        next();
    }
}

module.exports = {
    userPostSignup,
    userPostLogin
}