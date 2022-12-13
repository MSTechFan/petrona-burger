const express = require('express')
const app = express()
const mongoose = require('mongoose')
const { uri } = require('./config')
const Product = require('./models/product')
const cors = require('cors')
const bodyParser = require('body-parser')
const userRoutes = require('./routes/user')

mongoose.connect("mongodb+srv://MSTechFan:CityBarranquilla2022@cluster0.obgityr.mongodb.net/petronaburger?retryWrites=true&w=majority", {
    useNewUrlParser: true, useUnifiedTopology: true
})

app.use(bodyParser.urlencoded({extended: false}))
app.use(cors())

app.get('/api/products', async (req, res) => {
    const productList = []
    await Product.find().then(products => {
        products.forEach(product => {
            productList.push(product)
        })
    })
  res.json(productList)
})

// using user route
app.use(userRoutes)

module.exports = app