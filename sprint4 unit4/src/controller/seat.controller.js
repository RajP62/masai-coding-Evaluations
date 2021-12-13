const Seat = require("../model/seat.model");
const express = require("express");
const router = express.Router();

router.get("/:id", async(req,res)=>{
    try {
        const {show:{total_seats}} = await Seat.findById(req.params.id).populate("shows").lean().exec();

        res.json({total_seats});

    } catch (e) {
        res.status(500).json({message: "Internal server error"})
    }
});

router.post("/:id/:number", async(req,res)=>{
    try {
        const {show:{total_seats}} = await Seat.findById(req.params.id).populate("shows").lean().exec();
        if(total_seats>=req.params.number){
            const operation = await Seat.create(req.body);
            res.send(operation);
        }
        else{
            res.status(500).json({message: "Seats not available"});
        }
    } catch (error) {
        res.status(500).json({message: "Internal server error"})
    }
});

module.exports = router;