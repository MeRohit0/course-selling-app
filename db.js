const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

(async () => {
    mongoose.connect("mongodb+srv://<password_StrikeOff>@cluster0.sug5k.mongodb.net/course-selling-app")
})();

const userSchema = new Schema({
    email : { type: String, unique: true},
    password : String,
    firstName : String,
    LastName : String
})

const adminSchema = new Schema({
    email : { type: String, unique: true},
    password : String,
    firstName : String,
    LastName : String
})
const courseSchema = new Schema({
    title : String,
    description : String,
    price : Number,
    imageUrl : String,
    creatorId : ObjectId
})
const purchaseSchema = new Schema({
    courseId : ObjectId,
    userId : ObjectId
})

const userModel = mongoose.model("user",userSchema);
const adminModel = mongoose.model("admin",adminSchema);
const courseModel = mongoose.model("course",courseSchema);
const purchaseModel = mongoose.model("purchase",purchaseSchema);

module.exports = {
    userModel,
    adminModel,
    courseModel,
    purchaseModel
}
