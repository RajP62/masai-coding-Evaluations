const {Schema, model} = require("mongoose");
const bcrypt = require("bcryptjs");

const userSchema = new Schema({
    name: {type:String,required:true},
    email: {type:String,required:true},
    password: {type:String,required:true},
    profile_photo_url: {type:String,required:true},
    roles: [{type:String,required:true}]
});

userSchema.pre("save", function(next){
    if(!this.isModified("password"))return next();
    bcrypt.hash(this.password, function(err,hash){
        this.password = hash;
        next();
    })
})


userSchema.methods.checkPassword = function(password){
    return new Promise((resolve,reject)=>{
        bcrypt.compare(password,this.password, function(err,same){
            if(err) return reject(err);
            return resolve(same);
        })
    });

}
module.exports = model("user", userSchema);