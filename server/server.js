//creating instances of the required packets and etc
const express=require("express");
const cors=require("cors");
const mongoose=require("mongoose");
require("dotenv").config()

const app=express();
app.use(cors());
app.use(express.json());


//setting a port
const PORT= 5000;
console.log(`Starting server`)
//connecting with the port
app.listen(PORT, ()=> console.log(`Server started on port ${PORT}`))

//setting a route and connecting with it
mongoose.connect(process.env.MONGODB_URI,
    {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true
    },
    (err)=>{
    if(err) return console.error(err);
    console.log(`MongoDb connection established`)
});

mongoose.connection.once('open', function()
{
    console.log('connection has been made');
}).on('error', function(error)
{
    console.log('error is: ', error)
})

app.use("/posts", require("./routes/postRoutes"))
app.use("/users", require("./routes/userRouter"))
app.use("/categories", require("./routes/categoryRouter"))
app.use("/comments", require("./routes/commentRouter"))