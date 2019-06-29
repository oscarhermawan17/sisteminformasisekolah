const express = require('express')
const app = express()
const cors  = require('cors');
const bodyParser = require('body-parser');

var users = require('./routes/users');
var loginAuth = require('./routes/loginAuth');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(cors());
const Sequelize = require('sequelize');
const sequelize = new Sequelize('sisteminformasi', 'root', null, {
  host: 'localhost',
  dialect: 'mysql',
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000,
    operatorsAliases: false
  },
});

app.use('/users', users);
app.use('/login', loginAuth);

app.listen(3000)
