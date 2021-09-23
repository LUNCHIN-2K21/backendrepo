const mongoose = require('mongoose')
const Category = require('./category')
const { ObjectId } = mongoose.Schema;
const productSchema = new mongoose.Schema({

    name : {
        type: String,
        required:true,
        trim:true
    }, 
    price : {
        type: Number,
        required :true,
    },
    quantity : {
        type: Number,
        required :true,
    },
    category : {
        type: ObjectId,
        ref: 'Catagory'

    }
})

module.exports = mongoose.model('Product',productSchema)
