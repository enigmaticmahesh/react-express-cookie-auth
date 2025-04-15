
// // Middleware to set a cookie in every response
// const cookieAttacher = (req, res, next) => {
//     // console.log({res: res.locals?.cookieData})
//     res.cookie('myCookie', 'cookieValue', {
//         maxAge: 360000, // Cookie expiration time in milliseconds
//         httpOnly: true, // Prevents client-side JavaScript from accessing the cookie
//         // secure: process.env.NODE_ENV === 'production', // Use secure cookies in production
//         secure: true,
//         sameSite: 'Strict' // Helps prevent CSRF attacks
//     });
//     next(); // Call the next middleware or route handler
// }

const cookieAttacher = ({key, value, res}) => {
    res.cookie(key, value, {
        maxAge: 360000, // Cookie expiration time in milliseconds
        httpOnly: true, // Prevents client-side JavaScript from accessing the cookie
        // secure: process.env.NODE_ENV === 'production', // Use secure cookies in production
        secure: true,
        sameSite: 'Strict' // Helps prevent CSRF attacks
    });
}

module.exports = cookieAttacher