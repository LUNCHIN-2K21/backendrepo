const express = require('express')
const router = express.Router();



// imports

const {createProduct} = require('../controllers/product')

const { createCategory,showCategories }  = require('../controllers/category')

// create 
router.post('/category', createCategory)
router.post('/product',createProduct)


router.get('/categories', showCategories)
router.post('product/category/:id', createProduct)








module.exports = router;