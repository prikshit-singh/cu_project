const express = require('express')
const app = express();
var bcrypt = require("bcrypt")
const user_model = require('../../models/user_model');


const usersignup_route = app.post('/usersignup', async (req, res) => {
    var { username, phone, password_hash } = req.body;

    // Generate a salt
    const salt = await bcrypt.genSalt(12);

    // // Hash password
    password_hash = await bcrypt.hash(password_hash, salt);
    // // console.log(req.body.password_hash)
    var user_data = { username, phone, password_hash }

    var userData = new user_model(user_data)
    userData.save().then((data) => {
        res.send(data)
    }).catch((error) => {
        console.log(error)
    })
   

})

module.exports = usersignup_route