const express = require('express')
const app = express()
const mongoose = require('mongoose')
const { uri } = require('./config')
const Product = require('./models/product')

mongoose.connect(uri, {
    useNewUrlParser: true, useUnifiedTopology: true
})

app.get('/api/products', async (req, res) => {
    const productList = []
    await Product.find().then(users => {
        users.forEach(user => {
            productList.push({"name": user.name, "_id": user._id})
        })
    })
  res.send(productList)
})

module.exports = app

// insert 10 documents with the information of the products.