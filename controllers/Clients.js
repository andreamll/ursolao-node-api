//----------
// ARQUIVO: MODELS > CLIENTS.JS
// OBJETIVO: TRATA RETORNOS DO BD RELACIONADOS AOS CLIENTES / USUARIOS
//----------

const ClientsModel = require('../models/Clients');
const clientsModel = new ClientsModel();

class Clients {

    //lista cliente por ID
    static getById(request, response) {

        clientsModel.getById(request.params.id)
        .then( data => {
            if (data.length > 0) {
                response.json(data);                
            } else {
                response.sendStatus(404);
                console.log('Client not found. ID: ', request.params.id);
            }
         })
        .catch(err => {
            response.sendStatus(500);
            console.log('Error getting client by ID: ', request.params.id, err);
        });
    }

    //atualiza dados do cliente por ID
    static update(request, response) {

        clientsModel.getById(request.body.id)
        .then( data => {
            if (data.length > 0) {

                //recupera do body os campos que serao atualizados na tabela
                const conditions = [
                    {
                        field:          'id',
                        value:          request.body.id
                    },
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

                //chama rotina para atualizacao dos dados
                clientsModel.update(conditions)   
                response.sendStatus(200);
                console.log('Client has been updated. ID: ', request.body.id);            
            } else {
                response.sendStatus(404);
                console.log('Client not found. ID: ', request.body.id);
            }
         })
        .catch(err => {
            response.sendStatus(500);
            console.log('Error updating Client by ID: ', request.body.id, err);
        });
        
    }

    //incluir dados do cliente
    static insert(request, response) {
        
        //recupera do body os campos que serao atualizados na tabela
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

        //chama rotina para inclusao dos dados
        clientsModel.insert(conditions)   
        .then( _ => {
            response.sendStatus(200);
            console.log('Client has been inserted');           
        })
        .catch(err => {
            response.sendStatus(500);
            console.log('Error inserting client', err);
        });
        
    }

}
module.exports = Clients;