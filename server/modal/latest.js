const mongoose = require('mongoose')
const Latest = new mongoose.Schema({
    id:{
        type:String,
        required: true
    },
    title:{
        type:String,
        required: true
    },
    story:{
        type:String,
        required: true
    },
    directors:{
        type:String,
        required: true
    },
    writers:{
        type:String,
        required: true
    },
    language:{
        type:String,
        required: true
    },
    release_date:{
        type:String,
        required: true
    },
    rating:{
        type:String,
        required: true
    }
})

module.exports = mongoose.model('Latest', Latest)