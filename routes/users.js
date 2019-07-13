const express = require('express')
const router = express.Router()
const api = require('../controllers/user_controller')
// const auth = require('../auth/jwt');
// const validation = require('../validation/validation');

router.get('/', api.getAllUsers)
router.post('/create_user', api.createUser);
router.post('/update_user', api.updateUser);
router.post('/delete_user', api.deleteUser);
// router.post('/delete_user/:nis', api.updateUser);

module.exports = router