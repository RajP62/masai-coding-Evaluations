const Movie = require("../model/movie.model");
const express = require("express");
const router = express.Router();

router.post("", async(req,res)=>{
    console.log("in req")
    try {
        const operation = await Movie.create(req.body);
        res.send(operation);
    } catch (e) {
        res.status(500).json({message: "Internal server error"});
    }
});


router.get("/:actor", async(req,res)=>{
    try {
        const operation = await Movie.find({},{actors:[req.params.actor]}).populate("actors").lean().exec();
        res.send(operation);
    } catch (e) {
        res.status(500).json({message: "Internal server error"});
    }
});

module.exports = router;
