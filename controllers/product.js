const Product =  require('../modals/product')


exports.createProduct = async (req,res) => {
    console.log(req.body,'incoming');
    

     await Product.create(req.body)
     res.json(Product)
}