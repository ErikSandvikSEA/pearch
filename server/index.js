require('dotenv').config()
const server = require('./api/server.js')
const PORT = process.env.PORT || 8000

server.listen(PORT, () => {
     try{
          console.log(`|----Listening on port ${PORT}----|`)
     }
     catch(err){
          console.log(err)
     }
})