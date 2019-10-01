const express = require('express')
const router = express.Router()
const api = require('../controllers/guru_mata_pelajaran_controller')

router.get('/single/:id', api.getGuruMataPelajaranByIdMataPelajaran)
router.post('/add_guru_mata_pelajaran', api.addGuruMataPelajaran)
router.delete('/delete_guru_mata_pelajaran', api.deleteGuruMataPelajaran)

module.exports = router