const express = require('express')
const app = express()
const dotenv = require('dotenv')
const path = require('path')
const connectionDatabase = require('./config/connectDatabase')
dotenv.config({ path: path.join(__dirname, 'config', 'config.env') });

const product = require(path.join(__dirname, 'routes', 'product'))
const order = require(path.join(__dirname, 'routes', 'order'))

connectionDatabase()

app.use(express.json());

app.use('/api/', product)
app.use('/api/', order)

app.listen(process.env.PORT, () => {
    console.log(`Server listen to PORT ${process.env.PORT} in ${process.env.NODE_ENV}`)
})