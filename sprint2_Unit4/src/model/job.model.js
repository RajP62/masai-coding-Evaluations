const mongoose = require('mongoose');

const jobSchema = mongoose.Schema({
    Title: {type:String, required:true},
    workfromhome: {type:Boolean, required:true},
    company: {type:mongoose.Schema.Types.ObjectId, ref:"company",required:true},
    noticePeriod: {type:mongoose.Schema.Types.ObjectId, ref:"noticeperiod", required:true},
    skill: {type:mongoose.Schema.Types.ObjectId, ref:"skill", required:true},
});

module.exports = mongoose.model("job",jobSchema);