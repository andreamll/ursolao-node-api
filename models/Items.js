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

        //Buscar os produtos disponíveis, de determinada categoria
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
        sql = sql + "AND	ITM.itm_code		= CIT.itm_code "
        sql = sql + "AND	CIT.cli_code		= CLI.cli_code "
        sql = sql + "AND	CAT.sta_code		= STA.sta_code "
        sql = sql + "AND	CAT.sta_code 		= 'ENA' "
        sql = sql + "AND 	ucase(CAT.cai_descr) = '" + id.toUpperCase() + "'"
        sql = sql + "AND	ITM.itm_code NOT IN (SELECT LIT.itm_code "
        sql = sql + "                           FROM lendings_items LIT, lendings LEN "
        sql = sql + "                           WHERE LIT.lnd_code = LEN.lnd_code"
        sql = sql + "                           AND LIT.sta_code = 'ENA'"
        sql = sql + "                           AND LEN.sta_code = 'ENA'"
        sql = sql + "                           AND LEN.lnd_enddate >= now())"

        return pool.query(sql);
    };

    getByUserID(id) { 

        var sql;

        //Buscar os produtos de determinado cliente
        sql = ""

        //Todos os produtos emprestados por este cliente
        sql = sql + "SELECT 	LEN.lnd_code			AS Lending_ID "
        sql = sql + ",		    CLI.cli_code			AS Client_ID "
        sql = sql + ",		    ITM.itm_code			AS Item_ID "
        sql = sql + ",		    ITM.itm_title			AS Title "
        sql = sql + ",		    CASE WHEN UPPER(STL.sta_descr) = 'ENABLED' THEN True ELSE False END Status_Borrowed "
        sql = sql + ",		    CLI.cli_name			As Owner_lending "
        sql = sql + ",		    DATE_FORMAT(LEN.lnd_enddate,'%d/%m/%Y')			As EndDate_lending "
        sql = sql + ",		    ITM.itm_photo			As Photo "
        sql = sql + ",		    STA.sta_descr			AS Status "
        sql = sql + ",		    CAT.cai_code			AS Category_ID"
        sql = sql + ",		    CAT.cai_descr			AS Category "
        sql = sql + "FROM 		lendings				LEN "
        sql = sql + "INNER JOIN	lendings_items			LIT "
        sql = sql + "ON			LEN.lnd_code			= LIT.lnd_code "
        sql = sql + "INNER JOIN	clients_items			CIT "
        sql = sql + "ON			LEN.lnd_cliowner		= CIT.cli_code "
        sql = sql + "AND		LIT.itm_code		    = CIT.itm_code "
        sql = sql + "INNER JOIN	clients					CLI "
        sql = sql + "ON			CIT.cli_code			= CLI.cli_code "
        sql = sql + "INNER JOIN	items					ITM "
        sql = sql + "ON			LIT.itm_code			= ITM.itm_code "
        sql = sql + "INNER JOIN	status					STL "
        sql = sql + "ON			LIT.sta_code			= STL.sta_code "
        sql = sql + "INNER JOIN	status					STA "
        sql = sql + "ON			LEN.sta_code			= STA.sta_code "
        sql = sql + "INNER JOIN	categories_items		CAT "
        sql = sql + "ON			ITM.cai_code			= CAT.cai_code "
        sql = sql + "WHERE 		LEN.lnd_cliowner 	    = " + id + " "
        sql = sql + "AND        LIT.sta_code            = 'ENA'"

        sql = sql + "UNION ALL "
        
        //Todos os produtos deste cliente ainda não emprestados
        sql = sql + "SELECT 	0           			AS Lending_ID "
        sql = sql + ",		    CLI.cli_code			AS Client_ID "
        sql = sql + ",		    ITM.itm_code			AS Item_ID "
        sql = sql + ",		    ITM.itm_title			AS Title "
        sql = sql + ",		    False                   AS Status_Borrowed "
        sql = sql + ",		    CLI.cli_name			As Owner_lending "
        sql = sql + ",		    ''          			As EndDate_lending "
        sql = sql + ",		    ITM.itm_photo			As Photo "
        sql = sql + ",		    STA.sta_descr			AS Status "
        sql = sql + ",		    CAT.cai_code			AS Category_ID"
        sql = sql + ",		    CAT.cai_descr			AS Category "
        sql = sql + "FROM 		items   				ITM "
        sql = sql + "INNER JOIN	clients_items			CIT "
        sql = sql + "ON			ITM.itm_code		    = CIT.itm_code "
        sql = sql + "INNER JOIN	clients					CLI "
        sql = sql + "ON			CIT.cli_code			= CLI.cli_code "
        sql = sql + "INNER JOIN	status					STA "
        sql = sql + "ON			CIT.sta_code			= STA.sta_code "
        sql = sql + "INNER JOIN	categories_items		CAT "
        sql = sql + "ON			ITM.cai_code			= CAT.cai_code "
        sql = sql + "WHERE 		CLI.cli_code            = " + id + " "
        sql = sql + "AND	    ITM.itm_code NOT IN (SELECT LIT.itm_code "
        sql = sql + "                                FROM lendings_items LIT, lendings LEN "
        sql = sql + "                                WHERE LIT.lnd_code = LEN.lnd_code"
        sql = sql + "                                AND LIT.sta_code = 'ENA')"
        
        return pool.query(sql);
    };

    delete(id) { 
        //return pool.query('DELETE FROM items WHERE itm_code = ' + id);
        return pool.query("UPDATE items SET sta_code = 'DIS' WHERE itm_code = " + id);
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
        var client;
        var item;

        conditions.forEach( ({ field, value }) => {
            if (field === "title")
                title = value;
            if (field === "descr")
                descr = value;
            if (field === "photo")
                photo = value;
            if (field === "category")
                category = value;
            if (field === "Owner_ID")
                client = value;
            }
        );

        var strSQL = ""
        strSQL = "INSERT INTO items (itm_title, itm_descr, itm_photo, cai_code) VALUES ("
                    + "'" + title 
                    + "','" + descr
                    + "','" + photo
                    + "'," + category
                    + ")"                    
        pool.query(strSQL);

        strSQL = "INSERT INTO clients_items (cli_code, itm_code, sta_code) "
                    + "SELECT " + client
                    + ",      MAX(itm_code) AS Id "
                    + ",      'ENA' "
                    + "FROM   items "
                    + "WHERE  itm_title = '" + title + "'"
                    + "AND    itm_descr = '" + descr + "'"
                    + "AND    itm_photo = '" + photo + "'"
                    + "AND    cai_code = " + category
                    
        return pool.query(strSQL);
    };
    

}

module.exports = Items;