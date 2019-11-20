//----------
// ARQUIVO: MODELS > CATEGORIES.JS
// OBJETIVO: TRATA RETORNOS DO BD RELACIONADOS AS CATEGORIAS
//----------

const CategoriesModel = require('../models/Categories');
const categoriesModel = new CategoriesModel();

class Categories {

    //lista as categorias existentes
    static get(request, response) {

        categoriesModel.get()
        .then( data => {
            if (data.length > 0) {
                response.json(data[0]);                
            } else {
                response.sendStatus(404);
                console.log('Categories not found');
            }
         })
        .catch(err => {
            response.sendStatus(500);
            console.log('Error getting categories', err);
        });

    }

    //lista categoria por ID
    static getById(request, response) {

        categoriesModel.getById(request.params.id)
        .then( data => {
            if (data.length > 0) {
                response.json(data[0]);                
            } else {
                response.sendStatus(404);
                console.log('Category not found. ID: ', request.params.id);
            }
         })
        .catch(err => {
            response.sendStatus(500);
            console.log('Error getting category by ID: ', request.params.id, err);
        });
    }

    //atualiza dados da categoria por ID
    static update(request, response) {

        categoriesModel.getById(request.body.id)
        .then( data => {
            if (data.length > 0) {

                //recupera do body os campos que serao atualizados na tabela
                const conditions = [
                    {
                        field:          'id',
                        value:          request.body.id
                    },
                    {
                        field:          'descr',
                        value:          request.body.descr
                    },
                    {
                        field:          'status',
                        value:          request.body.status
                    },
                ];

                //chama rotina para atualizacao dos dados
                categoriesModel.update(conditions)   
                response.sendStatus(200);           
            } else {
                response.sendStatus(404);
                console.log('Category not found. ID: ', request.body.id);
            }
         })
        .catch(err => {
            response.sendStatus(500);
            console.log('Error updating category by ID: ', request.body.id, err);
        });
        
    }

    //exclui categoria por ID
    static delete(request, response) {

        categoriesModel.getById(request.params.id)
        .then( data => {
            if (data.length > 0) {
                categoriesModel.delete(request.params.id)   
                response.sendStatus(200);           
            } else {
                response.sendStatus(404);
                console.log('Category not found. ID: ', request.params.id);
            }
         })
        .catch(err => {
            response.sendStatus(500);
            console.log('Error deleting category by ID: ', request.params.id, err);
        });      

    }

    //incluir dados da categoria
    static insert(request, response) {
        
        //recupera do body os campos que serao atualizados na tabela
        const conditions = [
            {
                field:          'descr',
                value:          request.body.descr
            },
            {
                field:          'status',
                value:          request.body.status
            },
        ];

        //chama rotina para inclusao dos dados
        categoriesModel.insert(conditions)   
        .then( _ => {
            response.sendStatus(200);        
        })
        .catch(err => {
            response.sendStatus(500);
            console.log('Error inserting category', err);
        });
        
    }

}
module.exports = Categories;