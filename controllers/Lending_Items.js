//----------
// ARQUIVO: CONTROLLERS > LENDING_ITEMS.JS
// OBJETIVO: TRATA RETORNOS DO BD RELACIONADOS AOS ITENS DOS EMPRESTIMOS DOS USUARIOS
//----------

const LendingItemsModel = require('../models/Lending_Items');
const lendingItemsModel = new LendingItemsModel();

class LendingItems {

    //lista emprestimo por ID
    static getById(request, response) {

        lendingItemsModel.getById(request.params.id)
        .then( data => {
            if (data.length > 0) {
                response.json(data);                
            } else {
                response.sendStatus(404);
                console.log('Borrowed item not found. ID: ', request.params.id);
            }
         })
        .catch(err => {
            response.sendStatus(500);
            console.log('Error getting borrowed item by ID: ', request.params.id, err);
        });
    }

    //exclui item do emprestimo por ID
    static delete(request, response) {
console.log(request.body.id);
        lendingItemsModel.getById(request.body.id)
        .then( data => {
            if (data.length > 0) {

                //recupera do body os campos que serao excluidos da tabela
                const conditions = [
                    {
                        field:          'id',
                        value:          request.body.id
                    },
                    {
                        field:          'item',
                        value:          request.body.item
                    },
                ];

                //chama rotina para atualizacao dos dados
                lendingItemsModel.delete(conditions)   
                response.sendStatus(200);
                console.log('Borrowed item has been deleted. ID: ', request.body.id,'Item: ', request.body.item);            
            } else {
                response.sendStatus(404);
                console.log('Lending not found. ID: ', request.body.id);
            }
         })
        .catch(err => {
            response.sendStatus(500);
            console.log('Error deleting borrowed item by ID: ', request.body.id, err);
        });
        
    }

    //incluir item no emprestimo
    static insert(request, response) {
        
        //recupera do body os campos que serao atualizados na tabela
        const conditions = [
            {
                field:          'id',
                value:          request.body.id
            },
            {
                field:          'item',
                value:          request.body.item
            },
            {
                field:          'status',
                value:          request.body.status
            },
        ];

        //chama rotina para inclusao dos dados
        lendingItemsModel.insert(conditions)   
        .then( _ => {
            response.sendStatus(200);
            console.log('Borrowed item has been inserted');           
        })
        .catch(err => {
            response.sendStatus(500);
            console.log('Error inserting borrowed item', err);
        });
        
    }

}
module.exports = LendingItems;