const mongoose = require("mongoose");
const { ObjectId } = mongoose.Schema
const product = require('./product')
userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim:true
  },
  email: {
    type: String,
    required: true,
    trim:true
  },
  password : {
    type: Number,
    required:true
  },
  phone : {
      type: Number,
      required: true

  },
  orders: {
      type: [ObjectId],
      ref: 'product'
  }
});

module.exports = mongoose.model("Catagory", catagorySchema);
