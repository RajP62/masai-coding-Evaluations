const mongoose = require("mongoose");

const skillSchema = mongoose.Schema({
    skill: {type:String, required:true}
});

module.exports = mongoose.model("skill", skillSchema);

