var db = require('../models');
var bcrypt  = require('bcrypt');
const saltRounds = 10;
const methods = {};

methods.createGuruMataPelajaran = (req,res)=>{
    db.GuruMataPelajaran.create({
        id_guru:req.body.id_guru,
        id_mata_pelajaran:req.body.id_mata_pelajaran,
    })
    .then(guru =>{
        res.send({status:"success", data:guru, message_response:"sukses mendaftar guru mata pelajaran"})
    })
    .catch((err)=>{
        res.send({status:"failed", message_response:"gagal mendaftar guru mata pelajaran"})
    })
}


module.exports = methods