const jwt = require("jsonwebtoken");
require("dotenv").config();
const JWT_SECRET = process.env.JWT_SECRET_USERS;

function userAuth ( req, res, next ){
    const token = req.headers.authorization;
    const authdata = jwt.verify(token , JWT_SECRET);
    
    if(authdata){
        req.userId = authdata.id;
        next();
    }else{
        res.status(403).json({
            message : "Signin again"
        })
    }
}

module.exports = { userAuth };