const express = require('express')
const app = express();
var bcrypt = require("bcrypt")
const user_model = require('../../models/user_model');
const jwt = require("jsonwebtoken");
const userlogin_route = app.post('/userlogin', async (req, res) => {
  console.log(req.body)
  var user = await user_model.findOne({ phone: req.body.phone })
  console.log(user.otp)
  console.log(req.body.otp)
 console.log(user.otp === req.body.otp)
  if(user.otp === req.body.otp){
    res.status(200).send("you are logged in")
  }else{
    res.status(400).send("invalid otp")
   }
 

})

module.exports = userlogin_route