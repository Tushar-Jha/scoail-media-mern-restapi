const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const morgan = require('morgan');
const helmet = require('helmet');

const userRoute=require('./routes/users');
const authRoute=require('./routes/auth');
const postRoute=require("./routes/posts");

const app = express();

dotenv.config();

//connecting to mongoose
mongoose.connect(process.env.MONGO_URL, { useNewUrlParser: true, useUnifiedTopology: true }, () => {
    console.log('connected to mongodb');
});


//middlewares
app.use(express.json());
app.use(helmet());
app.use(morgan('common'));


app.use("/api/users",userRoute);
app.use("/api/auth",authRoute);
app.use("/api/posts",postRoute);


app.listen(8800, () => {
    console.log('Backend Server Running');
})