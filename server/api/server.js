//packages
const express = require('express')
const cors = require('cors')

//files


const server = express()
server.use(express.json())
server.use(cors())

server.get('/', (req, res) => {
    try{
        res.status(200).json({
            server: 'Up and running, yo'
        })
    }
    catch(err){
        res.status(500).json({
            error: err
        })
    }
})

module.exports = server