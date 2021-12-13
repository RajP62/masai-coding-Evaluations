const Screen = require("../model/screen.model");
const express = require("express");
const router = express.Router();

router.get("",async(req,res)=>{
    try{
        const operation = await Screen.find().lean().exec();
        res.send(operation);
    }catch(e){
        res.status(500).json({message:"Internal server error"});
    }
})

module.exports = router;
