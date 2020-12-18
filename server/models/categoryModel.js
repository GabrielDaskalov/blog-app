const mongoose=require("mongoose")
const Post=require("../models/postModel")


const categorySchema=mongoose.Schema({
    name: {type: String, required: true},
    posts: {type: []}
})

module.exports=Category=mongoose.model("category", categorySchema)
