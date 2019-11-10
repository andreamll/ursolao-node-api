//----------
// ARQUIVO: MODELS > CATEGORIES.JS
// OBJETIVO: MANIPULACAO DE DADOS RELACIONADOS AS CATEGORIAS
//----------

var pool = require('./BaseModelMySQL')
const util = require('util')

class Categories{
    
    get() { 
        return pool.query('SELECT * FROM categories_items');
    };

    getById(id) { 
        return pool.query('SELECT * FROM categories_items WHERE cai_code = ' + id);
    };

    delete(id) { 
        return pool.query('DELETE FROM categories_items WHERE cai_code = ' + id);
    };

    update(conditions = []) { 

        var id;
        var descr;
        var status;

        conditions.forEach( ({ field, value }) => {
                if (field === "id")
                    id = value;
                if (field === "descr")
                    descr = value;
                if (field === "status")
                    status = value;
            }
        );

        console.log ("id", id);
        console.log ("descr", descr);
        console.log ("status", status);

        const strSQL = "UPDATE categories_items SET cai_descr = '" + descr 
                        + "', sta_code = '" + status 
                        + "' WHERE cai_code = " + id

        console.log ("sql",strSQL);

        return pool.query(strSQL);
    };

    insert(conditions = []) { 

        var descr;
        var status;

        conditions.forEach( ({ field, value }) => {
                if (field === "descr")
                    descr = value;
                if (field === "status")
                    status = value;
            }
        );

        const strSQL = "INSERT INTO categories_items (cai_descr, sta_code) VALUES ("
                        + "'" + descr 
                        + "','" + status 
                        + "')"

        return pool.query(strSQL);
    };
    

}

module.exports = Categories;