const jwt = require("jsonwebtoken");
const User = require("../model/user.model");
require("dotenv").config();

const genToken = (user)=>{
    return jwt.sign({user:user}, process.env.JSON_WEB_SALT);
}

const register = async (req,res)=>{
    try{
        const user = await User.findOne({email:{$eq:req.params.email}}).lean().exec();

        if(user) return res.status(400).json({message: "Email already exists"});

        const newUser = await User.create(req.body);

        const token = genToken(newUser);

        return res.status(200).json({user: newUser, token: token});
    }
    catch(e){
        res.status(500).json({message: "Internal server error"})
    }
}

const login = async (req, res)=>{
    try{
        const user = await User.findOne({email:{$eq: req.body.email}}).lean().exec();

        if(!user){
            return res.status(400).send("Cannot find the user");
        }

        const match = user.checkPassword(req.body.checkPassword);
        
        if(!match){
            return res.status(200).json({message:"Invalid password"});
        }
        let token = genToken(user);
        return res.status(200).json({user: user, token : token});
    }
    catch(e){
        res.status(500).json({message: "Internal server error"});
    }
}


module.exports = {register, login, genToken};
