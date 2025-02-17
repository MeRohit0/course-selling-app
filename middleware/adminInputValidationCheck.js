// input validation check for admin routes 
const { adminRouterPostSignup, adminRouterPostLogin, adminRouterPostCourse} = require("./type");

function adminPostLogin(req,res,next){
    const isValid =  adminRouterPostSignup.safeParse({
        email: req.body.email,
        password: req.body.password,
        firstName: req.body.firstName,
        lastName : req.body.lastName
    })
    if(!isValid.success){
        res.status(403).json({
            message : "Invalid Inputs"
        })
    }else{
        next();
    }
}

function adminPostSignup(req,res,next){
    const isValid =  adminRouterPostLogin.safeParse({
        title: req.body.title,
        description : req.body.description,
        price : req.body.price,
        imageUrl : req.body.imageUrl,
    })
    if(!isValid.success){
        res.status(403).json({
            message : "Invalid Inputs"
        })
    }else{
        next();
    }
}

function adminPostCourse(req,res,next){
    const isValid =  adminRouterPostLogin.safeParse({
        title: req.body.title,
        description : req.body.description,
        price : req.body.price,
        imageUrl : req.body.imageUrl,
    })
    if(!isValid.success){
        res.status(403).json({
            message : "Invalid Inputs"
        })
    }else{
        next();
    }
}

function adminPutCourse(req,res,next){
    const isValid =  adminRouterPostLogin.safeParse({
        title: req.body.title,
        description : req.body.description,
        price : req.body.price,
        imageUrl : req.body.imageUrl,
    })
    if(!isValid.success){
        res.status(403).json({
            message : "Invalid Inputs"
        })
    }else{
        next();
    }
}

module.exports = {
    adminPostLogin,
    adminPostSignup,
    adminPostCourse,
    adminPutCourse
};