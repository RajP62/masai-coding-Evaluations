const mongoose = require("mongoose");

const ratingSchema = mongoose.Schema({
    rating:{type:Number, required:true}
});

module.exports = mongoose.model("rating",ratingSchema);

