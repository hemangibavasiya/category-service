const express = require('express')
const dotenv = require('dotenv')


dotenv.config()

const dbCon = require('./repository/db')

global.db = dbCon.connect()
require('./model/modelExport')

const app = express()


app.listen(process.env.PORT, () => console.log('server is up now'))

// Routes
const catRoute = require('./routes/cat')
const productRoutes = require('./routes/product')
app.use(express.json())
app.use('/api/category', catRoute)
app.use('/api/product', productRoutes)
