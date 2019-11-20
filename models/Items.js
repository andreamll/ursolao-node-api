//----------
// ARQUIVO: MODELS > ITEMS.JS
// OBJETIVO: MANIPULACAO DE DADOS RELACIONADOS AOS PRODUTOS
//----------

var pool = require('./BaseModelMySQL')
const util = require('util')

class Items{

    getById(id) {
        const strSQL = "CALL sps_items(" + id + ", null, null)" ;
        return pool.query(strSQL);
    };

    getByCategory(id) { 
        const strSQL = "CALL sps_items(null," + id + ",null)" ;
        return pool.query(strSQL);
    };

    delete(id) { 
        const strSQL = "CALL spd_items(" + id + ")" ;
        return pool.query(strSQL);
    };

    update(conditions = []) { 
        
        var id;
        var title;
        var descr;
        var photo;
        var category;

        conditions.forEach( ({ field, value }) => {
                if (field === "id")
                    id = value;
                if (field === "title")
                    title = value;
                if (field === "descr")
                    descr = value;
                if (field === "photo")
                    photo = value;
                if (field === "category")
                    category = value;
            }
        );

        const strSQL = "CALL spu_items(" + id + ", '" + title + "', '" + descr + "', '" + photo + "', " + category + ")" ;
        return pool.query(strSQL);
    };

    insert(conditions = []) { 

        var title;
        var descr;
        var photo;
        var category;

        conditions.forEach( ({ field, value }) => {
            if (field === "title")
                title = value;
            if (field === "descr")
                descr = value;
            if (field === "photo")
                photo = value;
            if (field === "category")
                category = value;
            }
        );

        const strSQL = "CALL spi_items('" + title + "', '" + descr + "', '" + photo + "', " + category + ")" ;
        return pool.query(strSQL);
    };
    

}

module.exports = Items;