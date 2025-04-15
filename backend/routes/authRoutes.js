const express = require('express')
const authCookieVerifier = require('../middlewares/cookieVerifier')
const router = express.Router()

router.use(authCookieVerifier)

router.get('/get-data', async (req, res) => {
    console.log({jwtData: req.userData})
    return res.status(200).json({data: ['Some Array of JSON Data']})
})

module.exports = router