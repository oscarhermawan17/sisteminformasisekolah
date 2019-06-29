var db = require('../models');
var bcrypt  = require('bcrypt');
const saltRounds = 10;
const methods = {};

methods.createUser = (req,res)=>{
    bcrypt.hash(req.body.password, saltRounds)
    .then((hash)=>{
            db.User.create({
            nis:"001",
            nama_siswa:"oke",
            alamat:"alamat 01",
            username:req.body.username,
            password:hash,
            role:1,
            status:'available'
        })
        .then(user =>{
            res.send({status:"success", message_response:user})
        })
        .catch((err)=>{
            res.send({status:"failed", message_response:err.message})
        })
    })
    .catch((err)=>{
        console.log(err.message)
        res.send({status:"failed", message_response:err.message})
    })
}

methods.getAllUser = (req,res)=>{
    db.User.findAll()
    .then((user)=>{
        res.send(user)
    })
    .catch((err)=>{
        res.send({status:"failed", message_response:err.message})
    })
}

module.exports = methods