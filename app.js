const mongoose = require('mongoose');
const express = require("express");
const cookieParser = require("cookie-parser");
const dotenv = require('dotenv');

const app = express();
app.use(cookieParser());

dotenv.config({path:'./config.env'});

const port = process.env.PORT || 5000;

 require('./db/conn');

 app.use(express.json());

//  const User = require('./models/userSchema');

// link the router files
app.use(require('./router/auth'));






 if(process.env.NODE_ENV == "production"){
       app.use(express.static("shiva/build"));
       const path = require("path");
       app.get("*" , (req , res) =>{
             res.sendFile(path.resolve(__dirname , 'shiva' , 'build' , 'index.html'));
       })
 }
  
app.listen(port,(x)=>{
      console.log(`Your server is running on the port = ${port}`);
})

