const mongoose = require("mongoose");

const noticePerSchema = mongoose.Schema({
    periodInMonth: {type:Number, required:true},
});

module.exports = mongoose.model("noticeperiod",noticePerSchema);