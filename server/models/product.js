const mongoose = require('mongoose')
const {Schema} = mongoose

const productSchema = new Schema({
    name:{type: String, required : true},
    createdDate: {type: Date, required: true},
    imgUrl: String,
    type: {type: String, required: true},
    description: String
})

module.exports = mongoose.model('Product', productSchema)