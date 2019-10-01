var db = require('../models');
const methods = {};


methods.getGuruMataPelajaranByIdMataPelajaran = (req,res) =>{
    db.GuruMataPelajaran.findAll({
        attributes:['id'],
        where:{
            id_mata_pelajaran:req.params.id,
            status:"available"
        },
        include:[{
            model:db.User,
            attributes:['nomor_induk_pegawai', 'nama_lengkap'],
        }]
    })
    .then(guru_mata_pelajaran =>{
        res.send({status:"success", data:guru_mata_pelajaran, message_response:"Sukses menemukan data Guru"})
    })
    .catch((err)=>{
        res.send({status:"failed", message_response:"gagal menemukan data Guru dan Mata Pelajaran"})
    })
}

methods.addGuruMataPelajaran = async function(req,res){
    try {
        let cek_guru_mata_pelajaran = await db.GuruMataPelajaran.findOrCreate({
            where: {
                id_guru: parseInt(req.body.id_guru),
                id_mata_pelajaran: parseInt(req.body.id_mata_pelajaran)
            },
            defaults:{
                id_guru: parseInt(req.body.id_guru),
                id_mata_pelajaran: parseInt(req.body.id_mata_pelajaran),
                status:'available'
            }
        })
        if(cek_guru_mata_pelajaran.indexOf(true) !== -1){
            //berhasil buat baru
            db.GuruMataPelajaran.findOne({
                attributes:['id'],
                where:{
                    id_guru:req.body.id_guru,
                    id_mata_pelajaran:req.body.id_mata_pelajaran,
                    status:"available"
                },
                include:[{
                    model:db.User,
                    attributes:['nomor_induk_pegawai', 'nama_lengkap'],
                }]
            })
            .then(guru_mata_pelajaran =>{
                res.send({status:"success", data:guru_mata_pelajaran, message_response:"sukses menemukan data guru"})
            })
            .catch(err=>{
                res.send({status:"failed", data:err, message_response:"gagal menemukan guru, silahkan refresh halaman anda 2"})
            })
        } else if(cek_guru_mata_pelajaran.indexOf(false) !== -1){
            // db.GuruMataPelajaran.update({
            //     status:"available"
            // },{ 
            //     where:{
            //         id_guru:req.body.id_guru,
            //         id_mata_pelajaran:req.body.id_mata_pelajaran
            // }})
            // .then(data_guru =>{
            //     if(data_guru[0] === 1){
            //         db.GuruMataPelajaran.findOne({
            //             attributes:['id'],
            //             where:{
            //                 id_guru:req.body.id_guru,
            //                 id_mata_pelajaran:req.body.id_mata_pelajaran
            //             },
            //             include:[{
            //                 model:db.User,
            //                 attributes:['nomor_induk_pegawai', 'nama_lengkap'],
            //             }]
            //         })
            //         .then(user=>{
            //             res.send({status:"success", data:user, message_response:"Sukses hapus user"})
            //         })
            //         .catch(err=>{
            //             res.send({status:"failed", message_response:"gagal update user"})
            //         })
            //     } 
            // })
            // .catch(err =>{
            //     res.send({status:"failed", data:err, message_response:"gagal menambah guru"})
            // })
            res.send({status:"failed", message_response:"gagal mendaftarkan guru"})
        }
    }
    catch(err){
        res.send({status:"failed", message_response:"gagal mendaftarkan guru"})
    }
}

methods.deleteGuruMataPelajaran = async function(req,res){
    try {
        const tmpUser = await db.GuruMataPelajaran.update(
            {status:"deleted"},    
            {where:{ id:req.body.id}})
        
        if(tmpUser[0] === 1){
            res.send({status:"success", message_response:"sukses menghapus guru"})  
        } else {
            res.send({status:"failed", message_response:"Gagal hapus guru"})
        }
    }
    catch(err){
        res.send({status:"failed", data:err, message_response:"Gagal hapus Guru"})
    }
}



module.exports = methods