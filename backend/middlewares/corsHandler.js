const cors = require('cors')

// CORS configuration
const corsOptions = {
    origin: 'http://localhost:5173', // Replace with your React app's origin
    credentials: true, // Allow credentials (cookies, authorization headers, etc.)
};

const corsHandler = cors(corsOptions)

module.exports = corsHandler