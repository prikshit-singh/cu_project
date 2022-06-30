const express = require('express')
const app = express();
var bcrypt = require("bcrypt")
const user_model = require('../../models/user_model');
const jwt = require("jsonwebtoken");
var accountSid = "AC8b2bfc9aaa50a6996e631076f2d9e868"; // Your Account SID from www.twilio.com/console
var authToken = 'efb09875f99e84e61ba979554f362be8';   // Your Auth Token from www.twilio.com/console

const client = require('twilio')(accountSid, authToken, {
    lazyLoading: true
});


const send_otp = app.post('/sendotp', async (req, res) => {
  
  var user = await user_model.findOne({ phone: req.body.phone })
 var msg = "Sent from your Twilio trial account - 5953"

  
  if(user){
    var otp =await Math.floor(
        Math.random() * (9999 - 1000 + 1) + 1000
      )
        if(otp){
    client.messages
    .create({
      body: otp,
      to: '+917838480143', // Text this number
      from: '+12562570779', // From a valid Twilio number
    })
    .then((message) => {
        msg = message.body.split('-')[1]
        var setOtp = parseInt(msg);
        user_model.updateOne(
            { phone: req.body.phone },
            {
              $set: { otp:setOtp}
             
            }
         ).then(resolve=>{
            res.send(message.body)
         })
    })
    .catch(err=>{
      console.log(err)
    })
  }
  }else{
    res.status(400).send("user not found")
  }



})

module.exports = send_otp