const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const morgan = require('morgan');
const helmet = require('helmet');

const userRoute=require('./routes/users');
const authRoute=require('./routes/auth');
const postRoute=require("./routes/posts");
const multer=require("multer");
const path=require("path");


const app = express();

dotenv.config();

//connecting to mongoose
mongoose.connect(process.env.MONGO_URL, { useNewUrlParser: true, useUnifiedTopology: true })
.then( () => {
    console.log('connected to mongodb');
})
.catch((err)=>{
    console.log(err);
});

app.use("/images",express.static(path.join(__dirname,"public/images")));



//middlewares
app.use(express.json());
// app.use(express.bodyParser({limit: '50mb'})); 

app.use(helmet());
app.use(morgan('common'));

const storage=multer.diskStorage({
    destination:(req,file,cb)=>{
        cb(null,"public/images");
    },
    filename:(req,file,cb)=>{

        cb(null,file.originalname);
    }
})
const upload=multer({storage});
app.post("/api/upload",upload.single("file"),(req,res)=>{
    console.log(req.body.name);
    try{
        return res.status(200).json("File uploaded successfuly");
    }catch(err){
        console.log(err);
    }
});
app.use("/api/users",userRoute);
app.use("/api/auth",authRoute);
app.use("/api/posts",postRoute);
app.listen(8800, () => {
    console.log('Backend Server Running');
})