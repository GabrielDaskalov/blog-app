const router=require("express").Router();
const User=require("../models/userModel");
const bcrypt=require("bcrypt");
const jwt=require("jsonwebtoken")
const auth=require("../middleware/auth")
const authUpdates=require("../middleware/authUpdates")

router.post("/register", async (req, res)=>
{
    try
    {
        const {email, username, password, passwordCheck, age, town, country, role}= req.body;

        if(!email || !username || !password || !passwordCheck)
        {
            return res.status(400).json({msg: "Not all fields have been entered."})
        }

        if(password.length < 6)
        {
            return res.status(400).json({msg: "Password must be at least 6 characters."})
        }

        if(password !== passwordCheck)
        {
            return res.status(400).json({msg: "Enter the same password twice as verification."})
        }

        const existingUserEmail= await User.findOne({email: email});

        if(existingUserEmail)
        {
            return res.status(400).json({msg: "User with this email has been already registered."})
        }

        const existingUserUsername= await User.findOne({username: username});

        if(existingUserUsername)
        {
            return res.status(400).json({msg: "The username is already taken."})
        }

        const salt= await bcrypt.genSalt(10);
        const passwordHash= await bcrypt.hash(password, salt);

        const newUser= new User({
            email,
            username,
            password: passwordHash,
            age,
            town,
            country,
            role
        })

        const savedUser=await newUser.save();
        res.json(savedUser)
        
    }
    catch(err)
    {
        console.log(err)
        res.status(500).json(err)
    }
})

router.post("/login", async (req, res)=>
{
    try
    {
        const {username, password}= req.body;

        if(!username || !password)
        {
            return res.status(400).json({msg: "Not all fields have been entered."})
        }

        const user= await User.findOne({username: username})

        if(!user)
        {
            return res.status(400).json({msg: "There is no account with this username."})

        }

        const isMatch= await bcrypt.compare(password, user.password)

        if(!isMatch)
        {
            return res.status(400).json({msg: "Invalid credentials."})

        }

        const token= jwt.sign({ id: user._id}, process.env.JWT_SECRET);

        res.json({
            token,
            user: {
                id: user._id,
                username: user.username,
                email: user.email,
                age: user.age,
                town: user.town,
                country: user.country,
                role: user.role
            }
        })

    }
    catch(err)
    {
        console.log(err)
        res.status(500).json(err)
    }


})

router.delete("/delete", auth, async (req, res)=>
{
    try
    {
        const deletedUser= await User.findByIdAndDelete(req.user);
        res.json(deletedUser);
        
    }
    catch(err)
    {
        console.log(err)
        res.status(500).json(err)
    }
})

router.post("/tokenIsValid", async (req, res)=>
{
    try
    {
        const token=req.header("x-auth-token");
        if(!token)
        {
            return res.json(false)
        }

        const verified=jwt.verify(token, process.env.JWT_SECRET)
        if(!verified)
        {
            return res.json(false)
        }

        const user= await User.findById(verified.id)
        if(!user)
        {
            return res.json(false)
        }

        return res.json(true)
    }
    catch(err)
    {
        console.log(err)
        res.status(500).json(err)
    }





})

router.get("/", auth, async (req, res)=>
{
    try{
    let user = await User.findById(req.user)
    res.json(user=
        {
            id: user._id,
            email: user.email,
            username: user.username,
            age: user.age,
            town: user.town,
            country: user.country,
            role: user.role
        })
    }
    catch(err)
    {
        console.log(err)
        res.status(500).json(err)
    }
})

router.post("/update", authUpdates, async (req, res)=>
{
    console.log("2.Step")
    try
    {
        console.log("3. Step")
        console.log(req.user)

        let currentUser = await User.findById(req.user)

        console.log(currentUser._id)

        console.log(currentUser)
        
        if(!currentUser)
        {
            return res.status(401).json({msg: "The user doesnt exist"})
        }

        const newUpdates= req.updates;

        console.log(`The new updates are: ` , newUpdates)
        

        var usernameToSet = (newUpdates.username === null || newUpdates.username === currentUser.username ?
            currentUser.username : newUpdates.username);
        var emailToSet = (newUpdates.email === null || newUpdates.email === currentUser.email ?
            currentUser.email : newUpdates.email);
        var ageToSet = (newUpdates.age === null || newUpdates.age === currentUser.age ?
            currentUser.age : newUpdates.age);
        var townToSet = (newUpdates.town === "" || newUpdates.town === currentUser.town ?
            currentUser.town : newUpdates.town);
        var countryToSet = (newUpdates.country === null || newUpdates.country === currentUser.country ?
            currentUser.country : newUpdates.country);

            console.log(`tuka sme`)

        currentUser.username = usernameToSet;
        console.log("minahme suername")

        currentUser.email = emailToSet;
        console.log("minahme emial")

        currentUser.age=ageToSet;
        console.log("minahme age")

        currentUser.town = townToSet;
        console.log("minahme town")

        currentUser.country=countryToSet;
        console.log("minahme country")


        await currentUser.save();
        console.log("minahme update")


        return res.json(currentUser)


    }
    catch(err)
    {
        console.log(err)
        res.status(500).json(err)
    }


})


router.get("/find", async (req, res)=>
{
    try
    {
        const input=req.query.input;
        console.log(input)

        const allUsers= await User.find();

        const result=allUsers.filter((u)=>u.username.toLowerCase().startsWith(input))

        console.log("result:" ,result)

        res.send(result)

    }
    catch(err)
    {
        console.log(err)
        res.status(500).json(err)
    }



})

router.get("/postsByUsername", async (req, res)=>
{
    try
    {
        const username=req.query.username;
        console.log(username)

        const existingUser= await User.findOne({username: username});

        if(!existingUser)
        {
            res.status(401).json({msg: "The user doesn't exist."})
        }

        const userPosts=existingUser.posts;

        res.send(userPosts)
    }
    catch(err)
    {
        console.log(err)
        res.status(500).json(err)
    }
})
module.exports=router;