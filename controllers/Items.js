//----------
// ARQUIVO: MODELS > Items.JS
// OBJETIVO: TRATA RETORNOS DO BD RELACIONADOS AOS ITENS DOS USUARIOS
//----------

const ItemsModel = require('../models/Items');
const itemsModel = new ItemsModel();

class Items {

    //lista item por ID
    static getById(request, response) {

        itemsModel.getById(request.params.id)
        .then( data => {
            if (data.length > 0) {
                response.json(data[0]);                
            } else {
                response.sendStatus(404);
                console.log('Item not found. ID: ', request.params.id);
            }
         })
        .catch(err => {
            response.sendStatus(500);
            console.log('Error getting item by ID: ', request.params.id, err);
        });
    }

    //lista item por categoria
    static getByCategory(request, response) {

        itemsModel.getByCategory(request.params.category)
        .then( data => {
            if (data.length > 0) {
                response.json(data[0]);                
            } else {
                response.sendStatus(404);
                console.log('Items not found. Category: ', request.params.category);
            }
         })
        .catch(err => {
            response.sendStatus(500);
            console.log('Error getting items by category: ', request.params.category, err);
        });
    }

    //atualiza dados do item por ID
    static update(request, response) {

        itemsModel.getById(request.body.id)
        .then( data => {
            if (data.length > 0) {

                //recupera do body os campos que serao atualizados na tabela
                const conditions = [
                    {
                        field:          'id',
                        value:          request.body.id
                    },
                    {
                        field:          'title',
                        value:          request.body.title
                    },
                    {
                        field:          'descr',
                        value:          request.body.descr
                    },
                    {
                        field:          'photo',
                        value:          request.body.photo
                    },
                    {
                        field:          'category',
                        value:          request.body.category
                    },
                ];

                //chama rotina para atualizacao dos dados
                itemsModel.update(conditions)   
                response.sendStatus(200);          
            } else {
                response.sendStatus(404);
                console.log('Item not found. ID: ', request.body.id);
            }
         })
        .catch(err => {
            response.sendStatus(500);
            console.log('Error updating Item by ID: ', request.body.id, err);
        });
        
    }

    //exclui item por ID
    static delete(request, response) {

        itemsModel.getById(request.params.id)
        .then( data => {
            if (data.length > 0) {
                itemsModel.delete(request.params.id)   
                response.sendStatus(200);   
            } else {
                response.sendStatus(404);
                console.log('Item not found. ID: ', request.params.id);
            }
        })
        .catch(err => {
            response.sendStatus(500);
            console.log('Error deleting item by ID: ', request.params.id, err);
        });      

    }

    //incluir dados do item
    static insert(request, response) {
        
        //recupera do body os campos que serao atualizados na tabela
        const conditions = [
            {
                field:          'title',
                value:          request.body.title
            },
            {
                field:          'descr',
                value:          request.body.descr
            },
            {
                field:          'photo',
                value:          request.body.photo
            },
            {
                field:          'category',
                value:          request.body.category
            },
        ];

        //chama rotina para inclusao dos dados
        itemsModel.insert(conditions)   
        .then( _ => {
            response.sendStatus(200);      
        })
        .catch(err => {
            response.sendStatus(500);
            console.log('Error inserting Item', err);
        });
        
    }

}
module.exports = Items;