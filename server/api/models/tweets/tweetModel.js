// packages
const mongoose = require('mongoose')

// files


const schema = mongoose.Schema({
    text: {
        type: String,
        required: true,
    },
    username: {
        type: String,
        required: true,
    },
    likes: {
        type: Number,
        default: 0,
    },
    time: {
        type: Date,
        default: Date.now,
    }
})

module.exports = mondoose.model('Tweet', schema)