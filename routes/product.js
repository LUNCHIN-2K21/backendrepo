const express = require('express')
const router = express.Router();



// imports

const {createProduct} = require('../controllers/product')

const { createCategory,showCategories }  = require('../controllers/category')


router.post('/category', createCategory)
router.get('/categories', showCategories)
router.post('/product',createProduct)







module.exports = router;