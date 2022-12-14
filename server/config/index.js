const dotenv = require('dotenv')
const path = require('path')
require('dotenv').config({ path: path.resolve(__dirname, '.env') })
module.exports = {
    port: process.env.PORT,
    uri: process.env.URI,
    apiSecret: process.env.API_SECRET,
}