const mongoose = require('mongoose')

const Book = mongoose.Schema({
    name: {
        type:String,
        require:true
    },
    description:{
        type:String,
        require:true
    },
    type:{
        type:String,
        require:true
    },
    quantity:{
        type:Number,
        require:true,
        min:0
    },
    price:{
        type:Number,
        require:true
    },
    imgUrl:{
        type:String,
        require:true
    },
    active:Boolean
})

module.exports = mongoose.model('Book',Book)