var db = require('../models');
const methods = {};

methods.createMataPelajaran = (req,res)=>{
    db.MataPelajaran.create({
        nama_mata_pelajaran:req.body.nama_mata_pelajaran,
        deskripsi:req.body.deskripsi,
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
        attributes:['id', 'nama_mata_pelajaran', 'deskripsi'],
        where:{
            status:['available']
        }
    })
    .then(mata_pelajaran=>{
        res.send({status:"success", data:mata_pelajaran, message_response:"success menemukan semua mata pelajaran"})
    })
    .catch((err)=>{
        res.send({status:"failed", message_response:"gagal menemukan data mata pelajaran"})
    })
}


methods.updateMataPelajaran = async function(req,res){
    try {
        const tmpMataPelajaran = await db.MataPelajaran.findByPk(req.params.id)
        let tmp = tmpMataPelajaran.dataValues
        try{
            const updateUser = await db.MataPelajaran.update(
                { nama_mata_pelajaran:req.body.nama_mata_pelajaran,
                  deskripsi:req.body.deskripsi
                },
                { where: { id : req.params.id }})
                console.log('update use', updateUser)
            if(updateUser[0] === 1){
                db.MataPelajaran.findByPk(req.params.id)
                .then(mata_pelajaran =>{
                    console.log('suskes')
                    res.send({status:"success", data:mata_pelajaran, message_response:"success update mata pelajaran"})
                })
                .catch(err=>{
                    res.send({status:"failed", message_response:err})
                })
            } else {
                console.log('masuk else')
                res.send({status:"failed", message_response:"gagal update mata pelajaran"})
            }
                
        }
        catch(err){
            res.send({status:"failed", message_response:"gagal update user"})
        }
    }
    catch(err){
        res.send({status:"failed", message_response:"data tidak ditemukan"})
    }
        

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