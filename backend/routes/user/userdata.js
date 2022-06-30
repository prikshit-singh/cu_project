const express = require('express')
const app = express();
const middleware = require('./check_auth')
const user_model = require('../../models/user_model');

const userlogin_route = app.get('/userdata',middleware,async (req, res) => {
  var user = await user_model.findOne({ email: req.userData.email })
  if (user) {
    res.send({status:200,user})
  }else{
    res.status(400).send('user not found')

  }
  // 




})

module.exports = userlogin_route