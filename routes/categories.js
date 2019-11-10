//----------
// ARQUIVO: ROUTES > CATEGORIES.JS
// OBJETIVO: CONSULTAR CATEGORIAS DOS ITENS
//----------

//dependencias
const express = require('express');
const Categories = require('../controllers/Categories');

//instancia
const router = express.Router();

//controllers
//-- lista todas as categorias
router.get('/', Categories.get);

//-- lista categoria por ID
router.get('/:id', Categories.getById);

//-- atualiza categoria por ID
router.put('/', Categories.update);

//-- exclui categoria por ID
router.delete('/:id', Categories.delete);

//-- inclui categoria
router.post('/', Categories.insert);

module.exports = router;