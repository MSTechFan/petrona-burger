const http = require('http')
const app = require('./app')
let { port } = require('./config/index')

const server = http.createServer(app)

server.listen(port || 3000)