const router=require("express").Router();
const Post=require("../models/postModel")
const User=require("../models/userModel")
const Category=require("../models/categoryModel")

router.post("/newComment", async (req, res)=>
{
    try
    {
        console.log("Connection Successful")

        console.log("Body:" ,req.body)

        const postTitle=req.body.title;

        console.log("post title" ,postTitle)

        const comment=req.body.comment;
        console.log("comment" ,comment)

        const username=req.body.username;
        console.log("username" ,username)

        const category=req.body.category;
        console.log("category" ,category)

        const existingPost= await Post.findOne({title: postTitle})

        if(!existingPost)
        {
            return res.status(401).json({msg: "A post with this title doesn't exist."})

        }

        const existingUser = await User.findOne({username:username})

        if(!existingUser)
        {
            return res.status(401).json({msg: "A user with this username doesn't exist."})
        }

        const existingCategory= await Category.findOne({name: category})

        if(!existingCategory)
        {
            return res.status(401).json({msg: "A category with this name doesn't exist."})
        }

        const categoryId = existingCategory._id;
        console.log("category id: " ,categoryId)

        let updated = await Category.findOneAndUpdate(
            {"_id": categoryId},
            {
                "$push":
                { "posts.$[b].comments": comment}
            },
            {
                "new": true,
                "arrayFilters": [
                    {"b.title": postTitle}
                ]
            }

        )

        console.log("updated: " ,updated)

        // await existingCategory.updateOne(
        //     {_id: categoryId},
        //     // // {$push: {posts: }},
        //     done)

        // await existingCategory.save()


        // await existingCategory.find(categoryId, function(err, category)
        // {
        //     console.log("type of category:" ,typeof(category))

        //     var posts=category.posts;

        //     console.log("posts from db: " ,posts)

        //     for(i=0; i<posts.length; i++)
        //     {
        //         console.log("post title from db" ,posts[i].title)

        //         console.log("post title from frontend" ,postTitle)

        //         if(posts[i].title === postTitle)
        //         {
        //             console.log("before adding a comment: " ,posts[i].comments)
        //             posts[i].comments.push(comment);

        //             console.log("after adding a comment: " ,posts[i].comments)
                    
        //             category.save()

        //             //console.log("successfull")
        //         }
        //         else
        //         {
        //             console.log("no posts with this title")
        //         }
        //     }


        // })

        // await existingCategory.findOne({title: postTitle}, function(err, posts)
        // {
        //     console.log("type of posts:" ,typeof(posts))

        //     var comments=posts.comments;

        //     console.log("comments from db: " ,comments)

        //     comments.push(comment)

        //     posts.save()

        // })



        existingPost.comments.push(comment)
        await existingPost.save()

        existingUser.comments.push(comment)
        await existingUser.save()


        res.send("connected")
        
    } catch (err) {
        
        console.log(err)
        res.status(500).json(err)
    }

})


module.exports=router;