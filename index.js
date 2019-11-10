//----------
// ARQUIVO: INDEX.JS
// OBJETIVO: ARQUIVO INICIAL DA API, DIRECIONA PARA ROUTES
//----------

//dependencias
const express = require('express');
const routes = require('./routes');
const bodyParser = require('body-parser');

//instancias
const app = express();
app.use(bodyParser.json());

//expoe as rotas
app.use(routes);

//seta porta da API
const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`App is listening on port ${port}`);
});

