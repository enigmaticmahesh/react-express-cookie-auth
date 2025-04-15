const express = require('express')
const cookieParser = require('cookie-parser');
const corsHandler = require('./middlewares/corsHandler');
const openRoutes = require('./routes/openRoutes')
const authRoutes = require('./routes/authRoutes')


const initServer = () => {
    const app = express()
    app.use(corsHandler)
    app.use(cookieParser())

    const PORT = process.env.PORT || 7001

    app.use('/api/v1', openRoutes)
    app.use('/api/v1/auth', authRoutes)

    app.get('/', (req, res) => {
        return res.status(200).json({message: 'Welcome to Auth Backend Server'})
    })

    app.listen(PORT, () => {
        console.log('Auth Server listening on PORT: '+PORT)
    }).on('error', (err) => {
        console.log('Error while starting Auth Backend Server')
    })
}

initServer()