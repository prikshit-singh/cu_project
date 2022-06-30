const express = require('express');
const app = express();
var cors = require('cors');
const path = require('path');
const root = require('path').join(__dirname, '..', 'satta_app', 'build');


const usersignup_route = require('./routes/user/usersignup');
const userlogin_route = require('./routes/user/userlogin');
const userdata_route = require('./routes/user/userdata');
require('./connection/connection');
require('dotenv').config();

var port = process.env.PORT || 8080;
app.use(express.json());
app.use(cors());

app.get('/', (req, res) => {
res.send('Welcome to learn backend with express!')
});

app.use(usersignup_route);
app.use(userlogin_route);


if (process.env.NODE_ENV === 'production') {
  app.use(express.static(root));
  app.get('*', (req, res) => {
    res.sendFile(path.resolve(root, 'index.html'));
  });
}

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
