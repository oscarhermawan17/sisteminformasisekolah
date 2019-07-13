var db = require('../models');
var bcrypt  = require('bcrypt');
const saltRounds = 10;
const methods = {};

methods.createUser = (req,res)=>{
    bcrypt.hash(req.body.password, saltRounds)
    .then((hash)=>{
            db.User.create({
            nomor_induk:req.body.nomor_induk,
            nama_lengkap:req.body.nama_lengkap,
            alamat:req.body.alamat,
            username:req.body.username,
            password:hash,
            email:req.body.email,
            nomor_hp:req.body.nomor_hp,
            role:1,
            status:'available'
        })
        .then(user =>{
            res.send({status:"success", data:user, message_response:"success create user"})
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

methods.getAllUsers = (req,res) =>{
    db.User.findAll({
        attributes:['nomor_induk','nama_lengkap', 'alamat', 'nomor_hp', 'email', 'username',],
        where:{
            status:['available', '1', '2', '3']
        },
        include: [{
            attributes:['role'],
            model: db.Role,
        }]
    })
    .then(users=>{
        res.send({status:"success", data:users, message_response:"success find all user"})
    })
    .catch((err)=>{
        res.send({status:"failed", message_response:"failed find all users"})
    })
}

methods.updateUser = async function(req,res){
    try {
        const tmpUser = await db.User.findOne({
        where:{
            nomor_induk:req.body.nomor_induk
        }})
        let tmp = tmpUser.dataValues
        try{
            const updateUser = await db.User.update(
                {nama_siswa:req.body.nama_siswa},
                { where: { nomor_induk :req.body.nomor_induk }})
            console.log("hasil = ", updateUser)
            res.send({status:"success", message_response:"Sukses memperbarui data siswa"})
        }
        catch(err){
            res.send({status:"failed", message_response:"gagal update user"})
        }
    }
    catch(err){
        res.send({status:"failed", message_response:"data tidak ditemukan"})
    }
}


//hapus hanya mengubah "status" menjadi deleted
methods.deleteUser = async function(req,res){
    console.log("masuk", req.body.nomor_induk)
    try {
        const tmpUser = await db.User.update(
            {status:"deleted"},    
            {where:{ nomor_induk:req.body.nomor_induk}})
        
        if(tmpUser[0] === 1){
            db.User.findOne({
                where:{
                    nomor_induk:req.body.nomor_induk
                }})
            .then(user=>{
                res.send({status:"success", data:user, message_response:"Sukses hapus user"})
            })
            .catch(err=>{
                res.send({status:"failed", message_response:"gagal update user"})
            })    
        } else {
            res.send("data gagal dihapus")
        }
    }
    catch(err){
        res.send({status:"failed", message_response:"gagal hapus user"})
    }
}

module.exports = methods