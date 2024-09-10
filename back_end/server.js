const express = require("express");

//Create express server
const app = express();

app.listen(5000, () => 
    console.log("Server running on port 5000")
);

//Test root route http://localhost:5000
app.get("/", (req, res) =>{
    res.send("Hello World !");
});

// instead "server": "node back_end/server.js" we use nodemon
 // using node we have to stop and start server againg and again
 //nodemon automatically update changes