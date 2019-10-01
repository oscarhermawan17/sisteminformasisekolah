const express = require('express')
const app = express()
const cors  = require('cors');
const bodyParser = require('body-parser');
app.use(cors());
require('dotenv').config();

var users = require('./routes/users');
var mata_pelajaran = require('./routes/mata_pelajaran');
var kelas = require('./routes/kelas');
var guru_mata_pelajaran = require('./routes/guru_mata_pelajaran');
var auth = require('./routes/auth');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const Sequelize = require('sequelize');
// const sequelize = new Sequelize(process.env.DB_DATABASE, process.env.DB_USER, process.env.DB_PASS, {
//   host: 'localhost',
//   dialect: 'mysql',
//   pool: {
//     max: 5,
//     min: 0,
//     acquire: 30000,
//     idle: 10000,
//     operatorsAliases: false
//   },
// });

app.use('/users', users);
app.use('/kelas', kelas);
app.use('/mata_pelajaran', mata_pelajaran);
app.use('/guru_mata_pelajaran', guru_mata_pelajaran);

app.use('/auth', auth);

app.listen(3001)
