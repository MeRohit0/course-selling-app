const { courseRouterPostPurchase } = require("../middleware/type");

function coursePostPurchase( req, res, next ){
    const isValid = courseRouterPostPurchase.safeParse(req.body.courseId);
    
    if(!isValid.success){
        res.status(403).json({
            message : "Invalid Inputs"
        })
    }else{
        next();
    }
}

module.exports = {
    coursePostPurchase
}