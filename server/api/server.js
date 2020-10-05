//packages
const express = require('express')
const cors = require('cors')
const mongoos = require('mongoose')

//files

const server = express()
server.use(express.json())
server.use(cors())

mongoos.connect('mongodb://localhost/twitter', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
})

server.get('/', (req, res) => {
    res.status(200).json({
        server: 'Up and running, yo'
    })
})

server.get(`/test`, (req, res) => {
    res.status(200).json({
        message: "This is a tester path"
    })
})

server.post('/newroute/:username', (req, res) => {
    const username = req.params.username
    res.status(201).json({
        username
    })
})

module.exports = server