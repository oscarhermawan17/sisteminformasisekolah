const express = require('express')
const router = express.Router()
const api = require('../controllers/guru_mata_pelajaran_controller')

router.get('/', api.getAllGuruMataPelajaran)

module.exports = router