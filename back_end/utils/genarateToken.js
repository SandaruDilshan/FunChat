import jwk from 'jsonwebtoken';

const genarateTokenAndSetCookie = (userId, res) => {
    const token = jwk.sign({ userId }, process.env.JWT_SECRET, {  // created token by calling sign method
        expiresIn: '15d'
    })

    res.cookie("jwk", token, {
        maxAge: 15 * 24 * 60 * 1000, // Mili second
        httpOnly: true, //Prevent XSS attacks cross-site scripting attacks
        sameSite: "strict", // CSRF attacks cross site request forgery attacks
        secure: process.env.NODE_ENV !== "development"
    })
}

export default genarateTokenAndSetCookie;