const express = require('express')
const mongoose = require('mongoose')
let mongoClient = require('mongodb')
const morgan = require('morgan');
const bodyParser = require('body-parser');
const productRoutes = require('./routes/product')
const categoryRoutes = require('./routes/category')
const app = express()
app.use(bodyParser());
app.use(morgan('dev'))
mongoose
	.connect('mongodb://localhost:27017/lunchin2k21', {
		useNewUrlParser: true,
		// useCreateIndex: true,
		// useFindAndModify: true,
  useUnifiedTopology: true 
	})
	.then(console.log('db connected'))
	.catch((err) => console.log('error', err));







// routes
app.use('/',productRoutes)
app.use('/', categoryRoutes)
app.listen('8080',()=> {
    console.log('connected to port 8000');
})