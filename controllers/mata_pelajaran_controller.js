var db = require('../models');
const methods = {};

methods.createMataPelajaran = (req,res)=>{
    db.MataPelajaran.create({
        nama_mata_pelajaran:req.body.nama_mata_pelajaran,
        status:"available",
    })
    .then(mata_pelajaran =>{
        res.send({status:"success", data:mata_pelajaran, message_response:"sukses mendaftar mata pelajaran baru"})
    })
    .catch((err)=>{
        res.send({status:"failed", message_response:"gagal mendaftar mata pelajaran baru"})
    })
}

methods.getAllMataPelajarans = (req,res) =>{
    db.MataPelajaran.findAll({
        attributes:['id', 'nama_mata_pelajaran'],
        where:{
            status:['available']
        }
    })
    .thaen(mata_pelajaran=>{
        res.send({status:"success", data:mata_pelajaran, message_response:"success menemukan semua mata pelajaran"})
    })
    .catch((err)=>{
        res.send({status:"failed", message_response:"gagal menemukan data mata pelajaran"})
    })
}

methods.deleteMataPelajaran = async function(req,res){
    try {
        const tmp_mata_pelajaran = await db.MataPelajaran.update(
            {status:"deleted"},    
            {where:{ id:req.body.id}})
        
        if(tmp_mata_pelajaran[0] === 1){
            db.MataPelajaran.findOne({
                where:{
                    id:req.body.id
                }})
            .then(mata_pelajaran=>{
                res.send({status:"success", data:mata_pelajaran, message_response:"Sukses hapus mata_pelajaran"})
            })
            .catch(err=>{
                res.send({status:"failed", message_response:"gagal hapus mata_pelajaran"})
            })    
        } else {
            res.send("gagal hapus mata_pelajaran")
        }
    }
    catch(err){
        res.send({status:"failed", message_response:"gagal hapus mata pelajaran"})
    }
}


module.exports = methods