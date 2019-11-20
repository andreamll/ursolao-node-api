//----------
// ARQUIVO: MODELS > LENDING_ITEMS.JS
// OBJETIVO: MANIPULACAO DE DADOS RELACIONADOS AOS ITENS DOS EMPRESTIMOS
//----------

var pool = require('./BaseModelMySQL')
const util = require('util')

class Lendings{

    getById(id) { 
        const strSQL = "CALL sps_lendings_items(" + id + ")" ;
        return pool.query(strSQL);
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

        const strSQL = "CALL spd_lendings_items(" + id + "," + item + ")" ;
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

        const strSQL = "CALL spi_lendings_items(" + id + "," + item + ", '" + status + "')" ; 
        return pool.query(strSQL);
    };
    

}

module.exports = Lendings;