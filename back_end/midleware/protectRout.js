import jwt from 'jsonwebtoken';
import User from "../models/user.model.js";

const protectRout = async (req, res, next) => {
    try {
        // Ensure token is coming from the cookies
        const token = req.cookies.jwt;

        // If no token is found, respond with error
        if (!token) {
            console.log("Cookies: ", req.cookies);

            return res.status(401).json({ error: "No token found, authorization denied" });

        }

        // Decode the token using JWT_SECRET
        const decoded = jwt.verify(token, process.env.JWT_SECRET);

        // Check if the decoded object contains user ID
        if (!decoded || !decoded.id) {
            return res.status(401).json({ error: "Unauthorized, invalid token" });
        }

        // Find user by decoded user ID
        const user = await User.findById(decoded.id).select("-password");

        // If user not found, respond with error
        if (!user) {
            return res.status(400).json({ error: "User not found" });
        }

        // Attach user to request object
        req.user = user;

        // Proceed to the next middleware
        next();

    } catch (error) {
        console.log("Error in protectRout middleware: ", error.message);
        res.status(500).json({ error: "Internal server error" });
    }
};

export default protectRout;
