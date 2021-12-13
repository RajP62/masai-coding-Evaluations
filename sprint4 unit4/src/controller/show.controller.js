const Show = require("../model/show.model");
const express = require("express");
const router = express.Router();

router.get("/:moviename", async(req,res)=>{
    try {
        const operation = await Show.find({},{movie:{$eq: req.params.moviename}}).lean().exec();
        res.send(operation);
    } catch (e) {
        res.status(500).json({message: "Internal server error"});
    }
});


router.post("", async(req,res)=>{
    try{
        const operation = await Show.create(req.body);
        res.send(operation);
    }
    catch(e){
        res.status(500).json({message: "Internal server error"});
    }
})

router.get("/nearest/:showId/:location", async(req,res)=>{
    try {
        const operation = await Show.find({},{screen:{tyeatres:{location:{$eq:req.params.location}}}}).populate({path:'screen',populate:{path:'theatres'}});

        res.status(500).send(operation);


    } catch (e) {
        res.status(500).json({message: "Internal server error"});
    }
});


module.exports = router;