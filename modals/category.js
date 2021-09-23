const mongoose = require('mongoose')
catagorySchema = new mongoose.Schema({

 name: {
  type: String,
  required:true,
 }
//  slug: {
//   type:String,
//   lowercase: true,
//   index: true,
//  }
})

module.exports = mongoose.model('Catagory',catagorySchema)