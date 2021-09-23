const bcrypt = require('bcrypt')
const db = require('mongodb+srv://solosanty:mongosanty1@lunchin.fto42.mongodb.net/myFirstDatabase?retryWrites=true&w=majority');

module.exports = {
    authentication,
    register
};

async function register(params) {
    const account = new db.Account(params);
    account.passwordHash = bcrypt.hashSync(params.password,10);
    await account.save();

}

async function authentication({email, password}) {
    const account = await db.Account.findOne({email});
    if(!account || !bcrypt.compareSync(password, account.passwordHash))
    return false;

 else {
    return true;
    }
}
