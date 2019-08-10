const express = require('express')
const router = express.Router()
const api = require('../controllers/user_controller')
// const auth = require('../auth/jwt');
// const validation = require('../validation/validation');

router.get('/get_all_students', api.getAllStudents);
router.get('/get_all_teachers', api.getAllTeachers);
router.post('/create_user', api.createUser);
router.post('/update_user', api.updateUser);
router.delete('/delete_user', api.deleteUser);

module.exports = router