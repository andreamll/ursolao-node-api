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
        var sql;

        sql = ""
        sql = sql + "SELECT	ITM.itm_code 		as ID "
        sql = sql + ",		ITM.itm_title 		as Title "
        sql = sql + ",		'Av. Paulista, 100'	as Address "
        sql = sql + ",		ITM.itm_photo		as Photo "
        sql = sql + ",		STA.sta_descr		as Status "
        sql = sql + ",		CLI.cli_code		as Owner_ID "
        sql = sql + ",		CLI.cli_name		as Owner_Name "
        sql = sql + "FROM 	items 				ITM "
        sql = sql + ", 		categories_items 	CAT "
        sql = sql + ",		clients_items		CIT "
        sql = sql + ",		clients				CLI "
        sql = sql + ",		status				STA "
        sql = sql + "WHERE 	ITM.cai_code 		= CAT.cai_code " 
        sql = sql + "AND	ITM.itm_code		= CIT.cli_code "
        sql = sql + "AND	CIT.cli_code		= CLI.cli_code "
        sql = sql + "AND	CAT.sta_code		= STA.sta_code "
        sql = sql + "AND	CAT.sta_code 		= 'ENA' "
        sql = sql + "AND 	ucase(CAT.cai_descr) = '" + id.toUpperCase() + "'"

        return pool.query(sql);
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