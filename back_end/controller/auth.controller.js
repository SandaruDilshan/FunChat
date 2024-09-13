import User from "../models/user.model.js";

export const signup = async (req, res) => {
    try{
        const { fullName, userName, password, confirmPassword, gender } = req.body;
        
        if (password !== confirmPassword) {
            return res.status(400).json({ error: "Password do not match.!" });
        }

        const user = await User.findOne({ userName });

        if (user) {
            return res.status(400).json({ error: "User already exist" });
        }

        //Create unique profile pic for default new user(from API)
             //https://avatar-placeholder.iran.liara.run/

        const boyProfilePic = `https://avatar.iran.liara.run/public/boy?username=${userName}`;
        const girlProfilePic = `https://avatar.iran.liara.run/public/girl?username=${userName}`;

        const newUser = new User({
            fullName,
            userName,
            password,
            gender,
            profilePic: gender === "male" ? boyProfilePic : girlProfilePic
        })

        await newUser.save(); // This will save as a new user in the database

        res.status(201).json({
            _id: newUser._id,
            fullName: newUser.fullName,
            userName: newUser.userName,
            profilePic: newUser.profilePic
        });

    } catch (error) {
        console.log("Error in sign up controller:", error.message);
        res.status(500).json({ error: "Internal server error.!" });
    }
}

export const login = (req, res) =>{
    res.send("This is the login page");
    console.log("Login User");
}

export const logout = (req, res) =>{
    res.send("This is the log out page");
    console.log("Log out");
}
