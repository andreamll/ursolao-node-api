//----------
// ARQUIVO: ROUTES > STATUS.JS
// OBJETIVO: PARA QUALQUER OUTRA ROTA, MOSTRAR JSON COM OS DADOS DA API
//----------

const express = require('express');
const router = express.Router();

router.get ("/", (req, res) => res.json(
        {   
            status: "Ursolao Node API"
        }
    )
);

module.exports = router;