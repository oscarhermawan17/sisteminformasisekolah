const express = require('express');
const api = require('../auth/auth');
const router = express.Router();

router.post('/login', api.login);
router.post('/verify_token', api.verify_token)

module.exports = router