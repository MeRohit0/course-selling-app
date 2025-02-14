const jwt = require("jsonwebtoken");
require("dotenv").config();
const JWT_SECRET = process.env.JWT_SECRET_USERS;

function userAuth ( req, res, next ){
    const token = req.headers.authorization;
    let authdata;
    try {
        authdata = jwt.verify(token , JWT_SECRET);
    } catch (e) {
        console.error("file : userAuth error: " + e );
    }
    
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