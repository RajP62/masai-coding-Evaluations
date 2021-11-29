const express = require("express");
const router = express.Router();

const Company = require("../model/company.model");
const Job = require("../model/job.model");

router.get("/:companyId", async(req,res)=>{
    try{
        const matched = await Company.find({},{_id:req.params.companyId});
        res.status(200).send(matched);
    }
    catch(e){
        res.status(500).send(e);
    }
});

router.get("/mostOpenJobs", async(req,res)=>{
    try{
        const matched = await Job.find({},{$sortByCount:"company"}).limit(1);
        res.status(200).send(matched);
    }
    catch(e){
        res.status(500).send(e);
    }
})

module.exports = router;