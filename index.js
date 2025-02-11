const express = require("express");
const { userRouter } = require("./routes/user.js");
const { courseRouter } = require("./routes/course.js");
const { adminRouter } = require("./routes/admin.js");
const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
const JWT_SECRET = "MyBelovedLaptop";
const app = express();
const port = 3000;
 

// Routing in express 
app.use("/user", userRouter);
app.use("/course", courseRouter);
app.use("/admin", adminRouter);



app.listen(port, () => {
    console.log("We are on port no : " + port);
})