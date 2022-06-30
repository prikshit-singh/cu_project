const express = require('express')
const app = express();
var bcrypt = require("bcrypt")
const user_model = require('../../models/user_model');
const jwt = require("jsonwebtoken");

const userlogin_route = app.post('/userlogin', async (req, res) => {
  console.log(req.body)
  var user = await user_model.findOne({ email: req.body.email })
  if (user) {
    var password_match = await bcrypt.compare(req.body.password, user.password_hash)
    if (password_match) {
      const token = jwt.sign(
        { email: user.email, userId: user._id },
        "secret_this_should_be_longer",
        { expiresIn: "1h" }
      );

      res.status(200).json({
        token: token,
        expiresIn: 3600,
        userId: user
      });
    } else {
      res.status(403).send('invalid credential')
    }
  } else {
    res.status(403).send("user not found")

  }

  // res.send(user)




})

module.exports = userlogin_route