const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    username:{
    type:String,
    required:true,
    minlength:3
   },
   email:{
    type:String,
    required:true
   },
   password_hash:{
    type:String,
    required:true
   }
  

})

const User = mongoose.model('user', userSchema);
module.exports = User;