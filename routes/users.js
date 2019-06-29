const express = require('express')
const router = express.Router()
const api = require('../controllers/user_controller')
// const auth = require('../auth/jwt');
// const validation = require('../validation/validation');

router.get('/', api.getAllUser)
router.post('/create_user', api.createUser);

module.exports = router