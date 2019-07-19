var db = require('../models');
const methods = {};

methods.getAllGuruMataPelajaran = (req,res) =>{
    db.GuruMataPelajaran.findAll({
        attributes:['id'],
        where:{
            status:['available']
        },
        include:[{
            model:db.User,
            attributes:['id', 'nomor_induk', 'nama_lengkap'],
        }]
    })
    .then(guru_mata_pelajaran =>{
        res.send({status:"success", data:guru_mata_pelajaran, message_response:"gagal menemukan data Guru dan Mata Pelajaran"})
    })
    .catch((err)=>{
        res.send({status:"failed", message_response:"gagal menemukan data Guru dan Mata Pelajaran"})
    })
}

module.exports = methods