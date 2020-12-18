const jwt=require("jsonwebtoken")

const authUpdates=(req,res,next)=>
{
    console.log("1. Step: The request is here")
   try
    {
        //finding the token and the new username if there is
        //todo new auth file

        const elements = Object.values(req.body.headers)
        console.log(Object.values(req.body.headers))

        const token = elements[0];
        console.log(`token server` , token)

        const updates = elements[1];
        console.log(`updates server:`,updates)

        if(!token)
        {
            return res.status(401).json({msg: "No authentication token, authorization denied."})
        }

        const verified=jwt.verify(token, process.env.JWT_SECRET);

        if(!verified)
        {
            return res.status(401).json({msg: "Token verification failed, authorization denied."})
        }


        req.updates=updates;
        req.user=verified.id;
        next();
    }
    catch(err)
    {
        res.status(500).json({error: err.message})
    }
}

module.exports=authUpdates;