//----------
// ARQUIVO: CONTROLLER > REGISTER.JS
// OBJETIVO: INSERIR O CLIENTE
//----------

const createToken = require('../utils/createToken');
const ClientsModel = require('../models/Clients');
const clientsModel = new ClientsModel();


class Register {
   
    //consulta cliente por email+senha para geracao de token
    static register(request, response) {
        
        const conditions = [
            {
                field:          'name',
                value:          request.body.name
            },
            {
                field:          'email',
                value:          request.body.email
            },
            {
                field:          'password',
                value:          request.body.password
            },
            {
                field:          'countrycode',
                value:          request.body.countrycode
            },
            {
                field:          'areacode',
                value:          request.body.areacode
            },
            {
                field:          'telephone',
                value:          request.body.telephone
            },
            {
                field:          'zipcode',
                value:          request.body.zipcode
            },
        ];

        console.log("request.body.email", request.body.email);
        console.log("request.body.password", request.body.password);

        clientsModel.insert(conditions)
        .then( data => {

            clientsModel.auth(conditions)
            .then( data => {
                response.sendStatus(200);
                console.log('Client has been registered: ', request.body.email);
            })

         })
        .catch(err => {
            response.sendStatus(500);
            console.log('Error inserting client: ', request.body.email, err);
        });   
    }
}

module.exports = Register;