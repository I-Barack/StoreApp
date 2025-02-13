require('dotenv').config();

const express = require('express');
const mongoose = require('mongoose')
const stockRoutes = require('./routes/stock');

// App
const app = express();

// Middlewares
app.use(express.json())

app.use((res, req, next) => {
    console.log(req.path, req.method)
    next()
})

// Routes
app.use('/api/stock', stockRoutes)

// Connect to DB
mongoose.connect(process.env.MONGO_URI)
    .then(() => {
        // Listen for requests
        app.listen(process.env.PORT, () => {
            console.log('Connected to db & listening in port', process.env.PORT)
        })
    })
    .catch((error) => {
        console.log(error)
    })

