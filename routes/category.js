const express = require('express')
const router = express.Router();



// imports

const { createCategory,showCategories }  = require('../controllers/category')


router.post('/category', createCategory)
router.get('/categories', showCategories)







module.exports = router;