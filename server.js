const express = require('express')
const mongoose = require('mongoose')
let mongoClient = require('mongodb')
const morgan = require('morgan');
const bodyParser = require('body-parser');
const productRoutes = require('./routes/product')

const app = express()
app.use(bodyParser());
require('dotenv').config();
app.use(morgan('dev'))
mongoose
	.connect(process.env.ATLAS, {
		useNewUrlParser: true,
		// useCreateIndex: true,
		// useFindAndModify: true,
  useUnifiedTopology: true 
	})
	.then(console.log('db connected atlas'))
	.catch((err) => console.log('error', err));







// routes
app.use('/',productRoutes)

app.listen('8080',()=> {
    console.log('connected to port 8000');
})