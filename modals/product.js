const mongoose = require('mongoose')
const Category = require('./category')
const { ObjectId } = mongoose.Schema;
const productSchema = new mongoose.Schema({
    
    category : {
        type: ObjectId,
        ref: 'Category'
    },
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
    qtyAvailable : {
        type: Number,
        required :true, 
    },
    availableDays : {
        type : [String]
    },
    deliveryTime : {
        type: Number

    },
    noticePeriod : {
        type: String
    },
    

})

module.exports = mongoose.model('Product',productSchema)
