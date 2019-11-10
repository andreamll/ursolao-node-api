//----------
// ARQUIVO: MODELS > LENDING_ITEMS.JS
// OBJETIVO: MANIPULACAO DE DADOS RELACIONADOS AOS ITENS DOS EMPRESTIMOS
//----------

var pool = require('./BaseModelMySQL')
const util = require('util')

class Lendings{

    getById(id) { 
        return pool.query('SELECT * FROM lendings_items WHERE lnd_code = ' + id);
    };

    delete(conditions = []) { 
        var id;
        var item;
        var status;

        conditions.forEach( ({ field, value }) => {
                if (field === "id")
                    id = value;
                if (field === "item")
                    item = value;
            }
        );

        const strSQL = 'DELETE FROM lendings_items WHERE lnd_code = ' + id + ' AND itm_code = ' + item ;
        return pool.query(strSQL);
    };

    insert(conditions = []) { 

        var id;
        var item;
        var status;

        conditions.forEach( ({ field, value }) => {
                if (field === "id")
                    id = value;
                if (field === "item")
                    item = value;
                if (field === "status")
                    status = value;
            }
        );

        const strSQL = "INSERT INTO lendings_items (lnd_code, itm_code, sta_code) VALUES ("
                        + id 
                        + "," + item
                        + ",'" + status
                        + "')"

        return pool.query(strSQL);
    };
    

}

module.exports = Lendings;