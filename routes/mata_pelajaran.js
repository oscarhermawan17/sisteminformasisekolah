const express = require('express')
const router = express.Router()
const api = require('../controllers/mata_pelajaran_controller')

router.post('/create_mata_pelajaran', api.createMataPelajaran);
router.get('/get_all_mata_pelajaran', api.getAllMataPelajarans);
router.delete('/delete_mata_pelajaran', api.deleteMataPelajaran);
router.put('/update_mata_pelajaran/:id', api.updateMataPelajaran);

module.exports = router