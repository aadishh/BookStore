const User = require('../model/users')

const getAllUsers = async(req,res)=>{
    try {
        const Users= await User.find();
        res.json(Users);
    } catch (error) {
        res.status(500).json({error : 'Server Error'});
    }
}


module.exports = {getAllUsers};