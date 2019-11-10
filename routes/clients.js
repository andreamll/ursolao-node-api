//----------
// ARQUIVO: ROUTES > CLIENTS.JS
// OBJETIVO: AUTENTICAR E CONSULTAR DADOS DO CLIENTE
//----------

//dependencias
const express = require('express');
const Clients = require('../controllers/Clients.js');

//instancia
const router = express.Router();

//controllers
//-- lista cliente por ID
router.get('/:id', Clients.getById);

//-- atualiza cliente por ID
router.put('/', Clients.update);

//-- inclui cliente
router.post('/', Clients.insert);

module.exports = router;