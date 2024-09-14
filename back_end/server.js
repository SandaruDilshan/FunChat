import express from "express"; 
import dotenv from 'dotenv';

import authRouts from "./routs/auth.routes.js"
import connectToMongoDB from "./db/connectToMongoDB.js";

const app = express();
const PORT = process.env.PORT || 5000;

dotenv.config();

app.listen(PORT, () => {
        connectToMongoDB();   
        console.log(`Server running on port ${PORT}`);
    } 
);

//Create express server
app.use(express.json());  // This midleware helps to get request body data
// to parse the incoming requests with JSON payloads(from req.body)

app.use("/api/auth", authRouts);




// //Test root route http://localhost:5000
// app.get("/", (req, res) =>{
//     res.send("Hello World !");
// });
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         
