var expres = require('express')
var db = require('../models');
var bcrypt  = require('bcrypt');
var saltRounds = 10;
var jwt = require('jsonwebtoken');
var methods = {}

methods.login = function(req,res){
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
                let token = jwt.sign({username:attributesUser.username }, 'secret', { expiresIn: 60 * 60 })
                res.send({status:"success", token})
            })
            .catch((err)=>{
                res.send({status:"failed", message_response:"Connection time out, please check your connection"})
            })    
        }
        else{
          res.send({status:"failed", message_response:"Password doesnt match"})
        }
      })
      .catch((err)=>{
        res.send({status:"failed", message_response:"Username or password doesnt match"})
      })
  })
  .catch((err)=>{
    res.send({status:"failed", message_response:"Username doesnt exist"})
  })
}


module.exports = methods
