const express = require("express")

const server = express()

server.use(express.json())

server.use('*', (req, res, next)=>{
    next({status: 404, message: 'so sorry, not found darlin'})
})

module.exports = server
