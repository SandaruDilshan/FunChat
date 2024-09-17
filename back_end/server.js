import express from "express"; 
import dotenv from 'dotenv';
import cookieParser from "cookie-parser";

import connectToMongoDB from "./db/connectToMongoDB.js";

import authRouts from "./routs/auth.routes.js"
import messageRouts from "./routs/message.routes.js"  
import userRouts from "./routs/user.routes.js"  

const app = express();
const PORT = process.env.PORT || 5000;

dotenv.config();

app.listen(PORT, () => {
        connectToMongoDB();   
        console.log(`Server running on port ${PORT}`);
    } 
);

//Midleware
//Create express server
app.use(express.json());  // This midleware helps to get request body data
// to parse the incoming requests with JSON payloads(from req.body)
app.use(cookieParser());

app.use("/api/auth", authRouts);
app.use("/api/messages", messageRouts);
app.use("/api/users", userRouts);                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        
