//----------
// ARQUIVO: ROUTES > LENDING_ITEMS.JS
// OBJETIVO: CONSULTAR ITENS DO EMPRESTIMO DO CLIENTE
//----------

//dependencias
const express = require('express');
const Lending_Items = require('../controllers/Lending_Items');

//instancia
const router = express.Router();

//controllers
//-- lista itens do emprestimo por ID
router.get('/:id', Lending_Items.getById);

//-- exclui item do emprestimo por ID
router.delete('/', Lending_Items.delete);

//-- atualiza devoluvao do item do emprestimo por ID
router.put('/', Lending_Items.update);

//-- inclui item no emprestimo
router.post('/', Lending_Items.insert);

module.exports = router;