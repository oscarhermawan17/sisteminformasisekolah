var methods = {}
methods.user = (req,res, next) => {
    if(req.body.nomor_induk == '' || req.body.nama_lengkap == '' || req.body.username == '' || req.body.password == '' || req.body.alamat == '' || req.body.gender == '' || req.body.nomor_hp == '' || req.body.email == '' || req.body.gender == ''){
        res.send({status:"failed", message_response:"Mohon isi data dengan benar, data tidak boleh kosong"})
    }
    else
        next()
}

module.exports = methods
