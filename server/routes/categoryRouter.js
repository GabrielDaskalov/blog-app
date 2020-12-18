const router=require("express").Router()
const Category=require("../models/categoryModel")

router.post("/addCategory", async (req, res)=>
    {
        try
        {
            console.log("1. Step")
            const name = req.body.name;
            console.log(name)

            const existingCategory= await Category.findOne({name: name});

            console.log("breakk")

            if(existingCategory)
            {
                return res.status(400).json({msg: "Category already exists."})
            }
            console.log("2. Step")


            const category = new Category({
                name
            })

            console.log("3. Step")


            console.log(category)

            const savedCategory = await category.save()

            res.json(savedCategory)
        }
        catch(err)
        {
            res.status(500).json(err)

        }
    }
)

router.get("/findByName", async (req, res)=>
{
    console.log("Step 1")

    try
    {
        console.log(req.query)
        const categoryName=req.query.name
        console.log(categoryName)

        const existingCategory = await Category.findOne({name: categoryName})


        if(!existingCategory)
        {
            return res.status(401).json({msg: "The category doesn't exist."})
        }


        const categoryId = existingCategory._id;
        console.log(categoryId)

         res.send(categoryId);
    }
    catch(err)
    {
        console.log(err)
        res.status(500).json(err)
    }
}
)


router.get("/", async (req, res)=>
{
    try
    {
        const input=req.query.input;
        console.log(input)

        const allCategories= await Category.find()

        const result= allCategories.filter(c=> c.name.toLowerCase().startsWith(input))

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

