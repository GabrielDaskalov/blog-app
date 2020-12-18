//js file where we configure the routes and some requests
const router=require("express").Router();
const Post=require("../models/postModel")
const Category=require("../models/categoryModel")
const User=require("../models/userModel")

router.post("/new", async (req, res)=>
{
    try
    {
        const {category, categoryId, userId, title, content, author, createdAt, comments} = req.body;

        const existingPost = await Post.findOne({title: title});

        if(existingPost)
        {
            return res.status(401).json({msg: "There is already a post with this name."})

        }

        const newPost = new Post({
            category,
            categoryId,
            userId,
            title,
            content,
            author,
            createdAt,
            comments
        })

        console.log(`1. Step: ${newPost}`)

        const categoryExist= await Category.findById(categoryId);

        if(!categoryExist)
        {
            return res.status(401).json({msg: "Category doesn't exist"})

        }

        categoryExist.posts.push(newPost);
        await categoryExist.save();

        console.log(`2. Step succeeded: ${categoryExist.posts}`)

        const userExist = await User.findById(userId);

        if(!userExist)
        {
            return res.status(401).json({msg: "User doesn't exist"})
        }

        userExist.posts.push(newPost);
        await userExist.save();

        console.log(`3. Step succeeded: ${userExist.posts}`)
        
        const savedPost = await newPost.save();

        console.log(`4. Step succeeded: ${savedPost} is saved`)

        return res.json(savedPost);
    }
    catch(err)
    {
        console.log(err)
        res.status(500).json(err)
    }


})



router.get("/findAllByCategory", async (req,res)=>
{
    console.log("founded")

    try
    {

        let name=req.query.name;

        console.log("test: " ,name)

        const existingCategory = await Category.findOne({name: name})

        console.log(`1. Step: ` ,existingCategory)

        if(!existingCategory)
        {
            return res.status(401).json({msg: "Category doesn't exist"})

        }

        const posts = existingCategory.posts;

        console.log(`2. Step `)

        res.send(posts)
    }
    catch(err)
    {
        console.log(err)
        res.status(500).json(err)
    }

})

router.get("/", async (req, res)=>
{
    try
    {
        console.log("1. Request is here")

        const input=req.query.input;
        console.log(input)


        const allPosts= await Post.find();

       // console.log(allPosts)

        const result=Object.values(allPosts).filter(post=> post.title.toLowerCase().startsWith(input))

        console.log(result)

        

        res.send(result)

    }
    catch(err)
    {
        console.log(err)
        res.status(500).json(err)
    }




})

module.exports=router;