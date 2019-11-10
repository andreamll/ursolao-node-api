//----------
// ARQUIVO: ROUTES > REGISTER.JS
// OBJETIVO: REGISTRO DE CLIENTE
//----------

//dependencias
const express = require('express');
const Register = require('../controllers/Register');

//instancia
const router = express.Router();

//controllers
//-- inclui um novo cliente (registro)
router.post('/', Register.register);

module.exports = router;