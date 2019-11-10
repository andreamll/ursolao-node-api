//----------
// ARQUIVO: MODELS > ITEMS.JS
// OBJETIVO: MANIPULACAO DE DADOS RELACIONADOS AOS PRODUTOS
//----------

var pool = require('./BaseModelMySQL')
const util = require('util')

class Items{

    getById(id) { 
        return pool.query('SELECT * FROM items WHERE itm_code = ' + id);
    };

    getByCategory(id) { 
        return pool.query("SELECT * FROM items I, categories_items C WHERE I.cai_code = C.cai_code AND c.cai_descr = '" + id + "'");
    };

    delete(id) { 
        return pool.query('DELETE FROM items WHERE itm_code = ' + id);
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

        const strSQL = "UPDATE items SET "
                        + "itm_title = '" + title
                        + "', itm_descr = '" + descr
                        + "', itm_photo = '" + photo
                        + "', cai_code = " + category
                        + " WHERE itm_code = " + id

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

        const strSQL = "INSERT INTO items (itm_title, itm_descr, itm_photo, cai_code) VALUES ("
                        + "'" + title 
                        + "','" + descr
                        + "','" + photo
                        + "'," + category
                        + ")"
console.log(strSQL)
        return pool.query(strSQL);
    };
    

}

module.exports = Items;