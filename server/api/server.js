//packages
const express = require('express')
const cors = require('cors')

//files

const server = express()
server.use(express.json())
server.use(cors())

server.get('/', (req, res) => {
    res.status(200).json({
        server: 'Up and running, yo'
    })
})

module.exports = server