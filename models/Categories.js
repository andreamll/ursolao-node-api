//----------
// ARQUIVO: MODELS > CATEGORIES.JS
// OBJETIVO: MANIPULACAO DE DADOS RELACIONADOS AS CATEGORIAS
//----------

var pool = require('./BaseModelMySQL')
const util = require('util')

class Categories{
    
    get() { 
        return pool.query("CALL sps_categories_items(null)");
    };

    getById(id) { 
        return pool.query("CALL sps_categories_items(" + id + ")");
    };

    delete(id) { 
        return pool.query("CALL spd_categories_items(" + id + ")");
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

        const strSQL = "CALL spu_categories_items(" + id + ", '" + descr + "','" + status + "')"
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

        const strSQL = "CALL spi_categories_items('" + descr + "','" + status + "')"
        return pool.query(strSQL);
    };
    

}

module.exports = Categories;