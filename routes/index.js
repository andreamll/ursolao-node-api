//----------
// ARQUIVO: ROUTES > INDEX.JS
// OBJETIVO: PARA CADA SOLICITACAO, DIRECIONA PARA A ROTA DO RECURSO ADEQUADO
//----------

//dependencias
const express = require('express');

const verifyToken = require('../middlewares/verifyToken');
const status = require('./status');
const auth = require('./auth');
const register = require('./register');
const categories = require('./categories');
const clients = require('./clients');
const items = require('./items');
const lendings = require('./lendings');
const lending_items = require('./lending_items');

//instancias
const router = express.Router();

//rotas base
//-- rota generica, mostra status da API
router.use('/', status);

//-- rota para autenticacao do cliente
router.use('/auth', auth);

//-- rota para registro do cliente (insercao)
router.use('/register', register);

//-- rota para dados de clientes
router.use('/clients', verifyToken, clients);

//-- rota para dados de categorias
router.use('/categories', verifyToken, categories);

//-- rota para dados de itens
router.use('/items', verifyToken, items);

//-- rota para dados de produtos emprestados
router.use('/lendings/items/', verifyToken, lending_items);

//-- rota para dados de emprestimos
router.use('/lendings', verifyToken, lendings);

//expoe as rotas
module.exports = router;



