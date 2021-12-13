const Theatre = require("../model/theater.model");
const express = require("express");
const router = express.Router();

router.get("",async(req,res)=>{
    try{
        const operation = await Theatre.find().lean().exec();
        res.send(operation);
    }catch(e){
        res.status(500).json({message:"Internal server error"});
    }
})

module.exports = router;
