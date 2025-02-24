const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();
const jwt = require("jsonwebtoken");
const JWT_SECRET = process.env.JWT_SECRET;

const { userRouter } = require("./routes/user");
const { courseRouter } = require("./routes/course");
const { adminRouter } = require("./routes/admin");
const app = express();
const port = 3000;

app.use(express.json());
// Routing in express 
app.use("/user", userRouter);
app.use("/course", courseRouter);
app.use("/admin", adminRouter);

async function main() {

    // its first connect to db then express is start 
    await mongoose.connect(process.env.DATABASE_KEY);
    app.listen( port, () => {
        console.log( "We are on port no : " + port );
    })
}

main();