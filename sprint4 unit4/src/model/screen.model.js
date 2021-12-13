const {Schema, model} = require("mongoose");

const screenSchema = new Schema({
    name: {type:String,required:true},
    theatres: {type:Schema.Types.ObjectId, ref:"theatres",required:true}
});

module.exports = model("screen", screenSchema);