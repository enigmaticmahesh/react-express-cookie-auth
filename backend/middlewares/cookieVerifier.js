const { COOKIES } = require("../constants");
const JwtHandler = require("../lib/JwtHandler");

// Middleware to verify cookie in every request
const authCookieVerifier = async (req, res, next) => {
    const myCookie = req.cookies[COOKIES.AUTH_TOKEN];
    // console.log({myCookie})
    const {err, data} = await JwtHandler.verifyJWT(myCookie)
    if (err) {
        return res.status(401).json({ status: "failure", message: "Unauthenticated!" });
    }
    req.userData = data
    next(); // Call the next middleware or route handler
}

module.exports = authCookieVerifier