const express = require('express')
const app = express();
const jwt = require("jsonwebtoken");
module.exports = async (req, res, next) => {
    try { 
    var token =await req.headers.authorization;
    if(!token){
      res.send({ message: 'token not found' });
    }
   var secret ="secret_this_should_be_longer"
   const decodedToken = jwt.verify(token,secret);
  
  req.userData = {
           email: decodedToken.email,
          //  userId: decodedToken.userId 
     };  
  next();
    } catch (error) {
      res.status(401).json({status:401, message: error });
    }
  };