import User from "../models/user.model.js";

export const getUserForSideBar = async (req, res) => {
    try {
        
        const loggedInUserId = req.user._id;

        //find all user in the database but not equal $ne loggedInUserId 
        //(really do not wwant to logged user display in the contact section) if we want like self messaging remove this part { _id: { $ne: loggedInUserId } } 
        const allUsers = await User.find({ _id: { $ne: loggedInUserId } }).select("-password"); 

        return res.status(200).json(allUsers);

    } catch (error) {
        console.error("Error in getUserForSideBar: ", error.message);
        res.status(500).json({ error: "Internal Srver error.!"})
    }
}