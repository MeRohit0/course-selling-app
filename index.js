const express = require("express");
const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
const JWT_SECRET = "MyBelovedLaptop";
const app = express();
const port = 3000;

app.post("/user/signup", function(req,res){
    res.json({
        message : "signup endpoint"
    })
});

app.post("/user/login", function(req,res){
    res.json({
        message : "signin endpoint"
    })
});

app.get("/user/purchases", function(req,res){
    res.json({
        message : "user purchased course endpoint"
    })
})

app.post("/course/purchase", function(req,res){
    // buy endpoint for course purchase 
    res.json({
        message : "user purchasing courses endpoint"
    })
});

app.get("/courses", function(req,res){
    res.json({
        message : "all courses endpoint"
    })
});

app.listen(port, () => {
    console.log("We are on port no" + port);
})