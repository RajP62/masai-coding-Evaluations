const express = require("express");
const app = require("..");
const router = express.Router();
const Job = require("../model/job.model");

router.get("/wfh",async(req, res)=>{
    try{
        const matched = await Job.find({},{workfromhome:true}).lean().exec();
        res.status(200).send(matched);
    }
    catch(e){
        res.status(500).send(e);
    }
});

router.get("/2months",async(req,res)=>{
    try{
        const matched = await Job.find({},{noticePeriod:{periodInMonth:2}}).populate({path:"noticePeriod", populate:"periodInMonth"});

        res.status(200).send(matched);
    }
    catch(e){
        res.status(500).send(e);
    }
});

router.get("/sortByRating", async(req,res)=>{
    try{
        const matched = await Job.find().sort({company:{rating:-1}}).populate("company");
        res.status(200).send(matched);
    }
    catch(e){
        res.status(500).send(e);
    }
});

router.get('/:city/:skill', async(req, res)=>{
    try{
        const matched = await Job.find({},{company:{city: {_id:req.params.city}}, skill:{skill:req.params.skill}}).populate({path:"company",populate:"city"}).populate("skill").populate("company").lean().exec();

        res.status(200).send(matched);
    }
    catch(e){
        res.status(500).send(e);
    }
});




module.exports = router;

