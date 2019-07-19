var db = require('../models');
const methods = {};

methods.createKelas = (req,res)=>{
    db.Kelas.create({
        nama_kelas:req.body.nama_kelas,
        status:"available",
    })
    .then(kelas =>{
        res.send({status:"success", data:kelas, message_response:"sukses mendaftar nama kelas baru"})
    })
    .catch((err)=>{
        res.send({status:"failed", message_response:"gagal mendaftar nama kelas baru"})
    })
}

methods.getAllKelas= (req,res) =>{
    db.Kelas.findAll({
        attributes:['id', 'nama_kelas'],
        where:{
            status:['available']
        }
    })
    .then(kelas=>{
        res.send({status:"success", data:kelas, message_response:"success menemukan semua kelas"})
    })
    .catch((err)=>{
        res.send({status:"failed", message_response:"gagal menemukan data kelas"})
    })
}

methods.deleteKelas = async function(req,res){
    try {
        const tmp_kelas = await db.Kelas.update(
            {status:"deleted"},    
            {where:{ id:req.body.id}})   
        if(tmp_kelas[0] === 1){
            db.Kelas.findOne({
                where:{
                    id:req.body.id
                }})
            .then(kelas=>{
                res.send({status:"success", data:kelas, message_response:"Sukses hapus kelas"})
            })
            .catch(err=>{
                res.send({status:"failed", message_response:"gagal hapus kelas"})
            })    
        } else {
            res.send("gagal hapus kelas")
        }
    }
    catch(err){
        res.send({status:"failed", message_response:"gagal hapus kelas"})
    }
}


module.exports = methods