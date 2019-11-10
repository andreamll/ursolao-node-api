//----------
// ARQUIVO: CONTROLLERS > LENDINGS.JS
// OBJETIVO: TRATA RETORNOS DO BD RELACIONADOS AOS EMPRESTIMOS DOS USUARIOS
//----------

const LendingsModel = require('../models/Lendings');
const lendingsModel = new LendingsModel();

class Lendings {

    //lista emprestimo por ID
    static getById(request, response) {

        lendingsModel.getById(request.params.id)
        .then( data => {
            if (data.length > 0) {
                response.json(data);                
            } else {
                response.sendStatus(404);
                console.log('Lending not found. ID: ', request.params.id);
            }
         })
        .catch(err => {
            response.sendStatus(500);
            console.log('Error getting lending by ID: ', request.params.id, err);
        });
    }

    //lista emprestimos por cliente
    static getByClient(request, response) {

        lendingsModel.getByClient(request.params.client)
        .then( data => {
            if (data.length > 0) {
                response.json(data);                
            } else {
                response.sendStatus(404);
                console.log('Lendings not found. Client: ', request.params.client);
            }
         })
        .catch(err => {
            response.sendStatus(500);
            console.log('Error getting lendings by client: ', request.params.client, err);
        });
    }

    //atualiza dados do emprestimo por ID
    static update(request, response) {

        lendingsModel.getById(request.body.id)
        .then( data => {
            if (data.length > 0) {

                //recupera do body os campos que serao atualizados na tabela
                const conditions = [
                    {
                        field:          'id',
                        value:          request.body.id
                    },
                    {
                        field:          'cliowner',
                        value:          request.body.cliowner
                    },
                    {
                        field:          'clirequester',
                        value:          request.body.clirequester
                    },
                    {
                        field:          'startdate',
                        value:          request.body.startdate
                    },
                    {
                        field:          'enddate',
                        value:          request.body.enddate
                    },
                    {
                        field:          'grntmrg',
                        value:          request.body.grntmrg
                    },
                    {
                        field:          'status',
                        value:          request.body.status
                    },
                ];

                //chama rotina para atualizacao dos dados
                lendingsModel.update(conditions)   
                response.sendStatus(200);
                console.log('Lending has been updated. ID: ', request.body.id);            
            } else {
                response.sendStatus(404);
                console.log('Lending not found. ID: ', request.body.id);
            }
         })
        .catch(err => {
            response.sendStatus(500);
            console.log('Error updating lending by ID: ', request.body.id, err);
        });
        
    }

    //exclui emprestimo por ID
    static delete(request, response) {

        lendingsModel.getById(request.params.id)
        .then( data => {
            if (data.length > 0) {
                lendingsModel.delete(request.params.id)   
                response.sendStatus(200);
                console.log('Lending has been deleted. ID: ', request.params.id);            
            } else {
                response.sendStatus(404);
                console.log('Lending not found. ID: ', request.params.id);
            }
        })
        .catch(err => {
            response.sendStatus(500);
            console.log('Error deleting lending by ID: ', request.params.id, err);
        });      

    }

    //incluir dados do emprestimo
    static insert(request, response) {
        
        //recupera do body os campos que serao atualizados na tabela
        const conditions = [
            {
                field:          'cliowner',
                value:          request.body.cliowner
            },
            {
                field:          'clirequester',
                value:          request.body.clirequester
            },
            {
                field:          'startdate',
                value:          request.body.startdate
            },
            {
                field:          'enddate',
                value:          request.body.enddate
            },
            {
                field:          'grntmrg',
                value:          request.body.grntmrg
            },
            {
                field:          'status',
                value:          request.body.status
            },
        ];

        //chama rotina para inclusao dos dados
        lendingsModel.insert(conditions)   
        .then( _ => {
            response.sendStatus(200);
            console.log('Lending has been inserted');           
        })
        .catch(err => {
            response.sendStatus(500);
            console.log('Error inserting lending', err);
        });
        
    }

}
module.exports = Lendings;