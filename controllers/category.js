const Category =  require('../modals/category')


exports.createCategory = async (req,res) => {
    console.log(req.body,'incoming Category');
    

     await Category.create(req.body)
     res.json(Category)
}
exports.showCategories = async (req,res) => {
   
    const category = await Category.find({})
    res.json(category)
}