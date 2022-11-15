const express = require('express')
const app = express()
const mongoose = require('mongoose')

/* mongoose.connect("mongodb+srv://MSTechFan:CityBarranquilla2022@cluster0.obgityr.mongodb.net/petronaburger?retryWrites=true&w=majority", {
    useNewUrlParser: true, useUnifiedTopology: true
}) */

app.get('/api/products', (req, res) => {
    res.json({
        "products": "Aqui irian mis productos, si tuviera algunos :c"
    })
})

module.exports = app