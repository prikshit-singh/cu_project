const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    username:{
    type:String,
    required:true,
    minlength:3
   },
   phone:{
    type:String,
    required:true
   },
   password_hash:{
    type:String,
    required:true
   },
   otp:{
    type:Number,
    required:false
   }
  

})

const User = mongoose.model('user', userSchema);
module.exports = User;