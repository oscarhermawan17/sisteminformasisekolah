var db = require('../models');
var bcrypt  = require('bcrypt');
var jwt = require('jsonwebtoken');
var methods = {}

methods.login = (req,res) => {
  console.log('masuk')
  // logic 3 login belum
  db.User.findOne({where : {username:req.body.username}})
  .then((user)=>{
    bcrypt.compare(req.body.password, user.password)
      .then((value)=>{
        if(value === true){
            db.User.findOne({
              where:{
                username:req.body.username
              }
            })
            .then(attributesUser => {
                let token = jwt.sign({username:attributesUser.username }, process.env.SECRET, { expiresIn: 60*60 })
                res.send({status:"success", message_response:"Berhasil", data:{token} })
            })
            .catch((err)=>{
                res.send({status:"failed", message_response:"Koneksi Gagal, Periksa kembali koneksi anda"})
            })    
        }
        else{
          res.send({status:"failed", message_response:"Password salah"})
        }
      })
      .catch((err)=>{
        res.send({status:"failed", message_response:"Username atau password salah"})
      })
  })
  .catch((err)=>{
    res.send({status:"failed", message_response:"Username tersebut tidak ada"})
  })
}


methods.verify_token = (req,res) => {
    jwt.verify(req.body.token, process.env.SECRET, function(err, decoded) {
      if(decoded){
        db.User.findOne({where : {username:decoded.username}})
        .then(user=> {
          res.send({status:"success", message_response:"Berhasil", 
          data:{
            nama_lengkap:user.nama_lengkap,
            nomor_induk:user.nomor_induk,
            nomor_induk_pegawai:user.nomor_induk_pegawai,
            username:user.username,
            alamat:user.alamat,
            gender:user.gender,
            email:user.email,
            nomor_hp:user.nomor_hp,
            role:user.role,
          }})
        })
        .catch(error =>{
          res.send({status:"failed", message_response:"Token tidak valid"})
        })
      }
      else
      res.send({status:"failed", message_response:"Token tidak valid"})
    });
}




module.exports = methods
