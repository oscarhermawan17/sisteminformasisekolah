const express = require('express')
const router = express.Router()
const api = require('../controllers/kelas_controller')

router.post('/create_kelas', api.createKelas);
router.get('/', api.getAllKelas)
router.post('/delete_kelas', api.deleteKelas);

module.exports = router