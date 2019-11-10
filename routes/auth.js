//----------
// ARQUIVO: ROUTES > AUTH.JS
// OBJETIVO: GERAR TOKEN PARA ACESSO
//----------

//dependencias
const express = require('express');
const Auth = require('../controllers/Auth');

//instancia
const router = express.Router();

//controllers
//-- valida credenciais de acesso e devolve um token para acesso
router.post('/', Auth.auth);

module.exports = router;