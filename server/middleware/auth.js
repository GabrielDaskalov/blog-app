const jwt=require("jsonwebtoken")

const auth=(req,res,next)=>
{
    console.log("1. Step")
   try
    {
        //finding the token and the new username if there is
        //todo new auth file
        const token=req.header("x-auth-token");
        if(!token)
        {
            return res.status(401).json({msg: "No authentication token, authorization denied."})
        }

        const verified=jwt.verify(token, process.env.JWT_SECRET);

        if(!verified)
        {
            return res.status(401).json({msg: "Token verification failed, authorization denied."})
        }

        console.log("I dont know why im here")
        req.user=verified.id;
        next();
    }
    catch(err)
    {
        res.status(500).json({error: err.message})
    }
}

module.exports=auth;