const express = require("express");
const morgan = require("morgan");
const helmet = require("helmet");
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const userRoute = require("./router/users");
const postRoute = require("./router/post");
const authRoute = require("./router/auth");

dotenv.config();

const app = express();

mongoose.connect(process.env.mongo_url,{
    useNewUrlParser:true, useUnifiedTopology:true},
    ()=>{
        console.log("Connected to MongoDB");
    }
);

//middleware
app.use(express.json());
app.use(helmet());
app.use(morgan("common"));

app.use("/api/users",userRoute);
app.use("/api/auth",authRoute);
app.use("/api/post",postRoute);

const PORT = process.env.port
app.listen(PORT || 8000, ()=>{
    console.log("server is running")
})