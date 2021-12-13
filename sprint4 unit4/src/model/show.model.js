const {Schema, model} = require("mongoose");

const showSchema = new Schema({
    timing: {type:String, required: true},
    movie: {type:String, required: true},
    total_seats: {type:Number, required:true},
    screen: {type: Schema.Types.ObjectId, ref:"screens", required:true}
});

module.exports = model("show", showSchema);