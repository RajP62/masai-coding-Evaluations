const mongoose = require("mongoose");

const companySchema = mongoose.Schema({
    companyName: {type:String,required:true},
    city: {type:mongoose.Schema.Types.ObjectId, ref:"city", required:true},
    rating: {type:mongoose.Schema.Types.ObjectId, ref:"rating", required:true},
});

module.exports = mongoose.model("company",companySchema);