//packages
const express = require('express')
const cors = require('cors')
const axios = require('axios')
const redis = require('redis')

//files
const PORT = process.env.PORT || 8000
const REDIS_PORT = process.env.REDIS_PORT || 6379
const mellin = require('../unneccessaries/notEvenNecessary')

const client = redis.createClient(REDIS_PORT)

const config = {
    headers: {
        'Authorization': 'Bearer ' + mellin.BearerToken,
        "Access-Control-Allow-Origin": "*",
      },
}

const url = `https://api.twitter.com/1.1/search/tweets.json?q=@`

const server = express()
server.use(express.json())
server.use(cors())

function cache(req, res, next){
    const { username } = req.params

    client.GET(username, (err, data) => {
        if(err) throw err
        if(data){
            res.status(200).json({
                count: data
            })
        } else {
            next()
        }
    })
}

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

server.get('/tweets/:username', cache, (req, res) => {
    const { username } = req.params
    console.log('....fetching data')
    axios.get(`${url}${username}`, config)
        .then(response => {
            console.log(response.data)
            client.SETEX(username, 1800, response.data.search_metadata.count)
            res.status(200).json({
                count: response.data.search_metadata.count
            })
        })
        .catch(err => {
            res.status(500).json({
                error: err,
                message: err.message
            })
        })
}) 


module.exports = server