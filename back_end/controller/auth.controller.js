export const signup = async (req, res) => {
    try{
        const { fullName, userName, password, confirmPassword, gender} = req.body;
    }catch(error){}
}

export const login = (req, res) =>{
    res.send("This is the login page");
    console.log("Login User");
}

export const logout = (req, res) =>{
    res.send("This is the log out page");
    console.log("Log out");
}
