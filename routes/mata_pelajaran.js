const express = require('express')
const router = express.Router()
const api = require('../controllers/mata_pelajaran_controller')

router.post('/create_mata_pelajaran', api.createMataPelajaran);
router.get('/', api.getAllMataPelajarans)
router.post('/delete_mata_pelajaran', api.deleteMataPelajaran);

module.exports = router