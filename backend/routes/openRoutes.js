const express = require('express')
const router = express.Router()
const { COOKIES } = require('../constants')
const JwtHandler = require('../lib/JwtHandler')
const cookieAttacher = require('../middlewares/cookieAttacher')

router.get('/register', async (req, res) => {
    const userData = { 'urn:example:claim': true }
    const jwt = await JwtHandler.createJWT(userData)
    // res.locals.cookieData = {jwt};
    cookieAttacher({key: COOKIES.AUTH_TOKEN, value: jwt, res})
    return res.status(200).json({message: 'User registered succesfully'})
})

router.get('/login', async (req, res) => {
    const userData = { 'urn:example:claim': true }
    const jwt = await JwtHandler.createJWT(userData)
    // res.locals.cookieData = {jwt};
    cookieAttacher({key: COOKIES.AUTH_TOKEN, value: jwt, res})
    return res.status(200).json({message: 'User logged in succesfully'})
})

module.exports = router