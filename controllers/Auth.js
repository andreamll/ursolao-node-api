//----------
// ARQUIVO: ROUTES > AUTH.JS
// OBJETIVO: GERAR TOKEN PARA ACESSO
//----------

const createToken = require('../utils/createToken');
const ClientsModel = require('../models/Clients');
const clientsModel = new ClientsModel();


class Auth {
   
    //consulta cliente por email+senha para geracao de token
    static auth(request, response) {
        
        const conditions = [
            {
                field:          'email',
                value:          request.body.email,
                condition:      '=='
            },
            {
                field:          'password',
                value:          request.body.password,
                condition:      '=='
            },
        ];

        clientsModel.auth(conditions)
        .then( data => {

            if (data.length > 0) {
                const id = data[0].id;
                response.json({ token: createToken( {id}, 43200 ) });

            } else {

                response.sendStatus(401);
                response.send({
                    code:       'not_found',
                    message:    'User not found'
                });
                console.log('Client not found. Email: ', request.body.email);

            }
         })
        .catch(err => {
            response.sendStatus(500);
            console.log('Error creating token: ', request.body.email, err);
        });   
    }
}

module.exports = Auth;