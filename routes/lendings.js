//----------
// ARQUIVO: ROUTES > LENDINGS.JS
// OBJETIVO: CONSULTAR EMPRESTIMOS DO CLIENTE
//----------

//dependencias
const express = require('express');
const Lendings = require('../controllers/Lendings');

//instancia
const router = express.Router();

//controllers
//-- lista emprestimo por ID
router.get('/:id', Lendings.getById);

//-- lista todas os emprestimos por cliente
router.get('/clients/:client', Lendings.getByClient);

//-- atualiza emprestimo por ID
router.put('/', Lendings.update);

//-- exclui emprestimo por ID
router.delete('/:id', Lendings.delete);

//-- inclui emprestimo
router.post('/', Lendings.insert);

module.exports = router;