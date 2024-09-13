// const express = require("express");
//use like import change package.json file type as module "type": "module",

import express from "express"; 

import dotenv from 'dotenv';
dotenv.config();

import authRouts from "./routs/auth.routes.js"
import connectToMongoDB from "./db/connectToMongoDB.js";

const PORT = process.env.PORT || 5000;

//Create express server
const app = express();

app.listen(PORT, () =>{
        connectToMongoDB();   
        console.log(`Server running on port ${PORT}`);
    } 
);

// //Test root route http://localhost:5000
// app.get("/", (req, res) =>{
//     res.send("Hello World !");
// });
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         
app.use("/api/auth", authRouts);

app.use(express.json());  // This midleware helps to get request body data
                          // to parse the incoming requests with JSON payloads(from req.body)