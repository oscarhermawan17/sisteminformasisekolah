const express = require('express')
const router = express.Router()
const api = require('../controllers/user_controller')
const validation = require('../form_validation/form')

router.get('/get_all_students', api.getAllStudents);
router.get('/get_all_teachers', api.getAllTeachers);
router.post('/create_user', validation.user, api.createUser);
router.post('/get_guru_by_name', api.getTeachersByName);
// router.post('/update_user', api.updateUser);
router.delete('/delete_user', api.deleteUser);
// router.put('/update_user', api.updateUser);

module.exports = router