//postModel.js file where we set up the model for a post
const mongoose=require("mongoose")

const postSchema=mongoose.Schema({
    category: {type: String, required: true},
    categoryId: {type: String},
    userId: {type: String},
    title: {type: String, required: true},
    content: {type: String, required: true},
    createdAt: {type: Date},
    author: {type: String, required: true},
    comments: {type: []}
});

module.exports=Post=mongoose.model("post", postSchema)
