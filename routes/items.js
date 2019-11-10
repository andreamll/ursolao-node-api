//----------
// ARQUIVO: ROUTES > ITEMS.JS
// OBJETIVO: CONSULTAR ITENS ASSOCIADOS AO CLIENTE
//----------

//dependencias
const express = require('express');
const Items = require('../controllers/Items');

//instancia
const router = express.Router();

//controllers
//-- lista item por ID
router.get('/:id', Items.getById);

//-- lista item por Categoria
router.get('/category/:category', Items.getByCategory);

//-- atualiza item por ID
router.put('/', Items.update);

//-- exclui item por ID
router.delete('/:id', Items.delete);

//-- inclui item
router.post('/', Items.insert);

module.exports = router;