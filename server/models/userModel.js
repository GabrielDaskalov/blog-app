const mongoose=require("mongoose");

const userSchema= new mongoose.Schema({
    email: {type: String, required: true, unique: true},
    username: {type: String, required: true},
    password: {type: String, required: true, minlength: 6},
    age: {type: Number},
    town: {type: String},
    country: {type: String},
    role: {type: Number},
    posts: {type: []},
    comments: {type: []}
})

module.exports=User=mongoose.model("user", userSchema)
