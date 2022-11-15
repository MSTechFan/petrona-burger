const http = require('http')
const app = require('./app')
const { port } = require('./config')

const server = http.createServer(app)
console.log(port)

server.listen(port || 3000)