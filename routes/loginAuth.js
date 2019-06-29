const express = require('express');
const api = require('../auth/auth');
const router = express.Router();

router.post('/', api.login);

module.exports = router