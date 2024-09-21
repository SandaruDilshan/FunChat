import dotenv from 'dotenv';
import cookieParser from "cookie-parser";
import express from "express"; 
import connectToMongoDB from "./db/connectToMongoDB.js";

import authRouts from "./routs/auth.routes.js"
import messageRouts from "./routs/message.routes.js"  
import userRouts from "./routs/user.routes.js"  
import { app, server } from './socket/socket.js';

const PORT = process.env.PORT || 5000;

dotenv.config();

//Midleware
//Create express server
app.use(express.json());  // This midleware helps to get request body data
// to parse the incoming requests with JSON payloads(from req.body)
app.use(cookieParser());

app.use("/api/auth", authRouts);
app.use("/api/messages", messageRouts);
app.use("/api/users", userRouts);                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        

server.listen(PORT, () => {
        connectToMongoDB();   
        console.log(`Server running on port ${PORT}`);
    } 
);