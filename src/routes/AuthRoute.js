const express = require('express')
const AuthController = require('../controller/AuthController');

const router = express.Router();

router.post('/', AuthController.registerUser);
router.post('/login', AuthController.login);

module.exports = router;
