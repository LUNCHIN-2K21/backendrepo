const User = require('../modals/user')

exports.createUser = async (req,res) => {
    console.log('hey');
    const {email,username,phone,password} = req.body
    console.log('user', req.body);
    const user = new User({
        username,
        email: email,
        phone

    })
    const newUser = await User.register(user,password)
    res.json(newUser)
}
exports.loginUser = (req,res) => {
    const {username,password} = req.body
    try{
        console.log('success');
    }catch(err){
        console.log(err);
    }
              

}