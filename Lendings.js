//----------
// ARQUIVO: MODELS > LENDINGS.JS
// OBJETIVO: MANIPULACAO DE DADOS RELACIONADOS AOS EMPRESTIMOS
//----------

var pool = require('./BaseModelMySQL')
const util = require('util')

class Lendings{

    getById(id) { 
        return pool.query('SELECT * FROM lendings WHERE lnd_code = ' + id);
    };

    getByClient(id) { 

        var sql;

        sql=""
        sql = sql + "SELECT 	LEN.lnd_code			AS Lending_ID "
        sql = sql + ",		    CLI.cli_code			AS Client_ID "
        sql = sql + ",		    ITM.itm_code			AS Item_ID "
        sql = sql + ",		    ITM.itm_title			AS Title "
        sql = sql + ",		    CASE WHEN UPPER(STL.sta_descr) = 'ENABLED' THEN True ELSE False END Status_Borrowed "
        sql = sql + ",		    CLI.cli_name			As Owner_lending "
        sql = sql + ",		    LEN.lnd_enddate			As EndDate_lending "
        sql = sql + ",		    ITM.itm_photo			As Photo "
        sql = sql + ",		    STA.sta_descr			AS Status "
        sql = sql + "FROM 		lendings				LEN "
        sql = sql + "INNER JOIN	lendings_items			LIT "
        sql = sql + "ON			LEN.lnd_code			= LIT.lnd_code "
        sql = sql + "INNER JOIN	clients_items			CIT "
        sql = sql + "ON			LEN.lnd_cliowner		= CIT.cli_code "
        sql = sql + "AND			LIT.itm_code		= CIT.itm_code "
        sql = sql + "INNER JOIN	clients					CLI "
        sql = sql + "ON			CIT.cli_code			= CLI.cli_code "
        sql = sql + "INNER JOIN	items					ITM "
        sql = sql + "ON			LIT.itm_code			= ITM.itm_code "
        sql = sql + "INNER JOIN	status					STL "
        sql = sql + "ON			LIT.sta_code			= STL.sta_code "
        sql = sql + "INNER JOIN	status					STA "
        sql = sql + "ON			LEN.sta_code			= STA.sta_code "
        sql = sql + "WHERE 		LEN.lnd_cliowner		= CLI.cli_code "
        sql = sql + "AND		LEN.lnd_cliowner 	    = " + id + " "
        sql = sql + "UNION ALL "
        sql = sql + "SELECT 	LEN.lnd_code			AS Lending_ID "
        sql = sql + ",		    CLI.cli_code			AS Client_ID "
        sql = sql + ",		    ITM.itm_code			AS Item_ID "
        sql = sql + ",		    ITM.itm_title			AS Title "
        sql = sql + ",		    CASE WHEN UPPER(STL.sta_descr) = 'ENABLED' THEN True ELSE False END Status_Borrowed "
        sql = sql + ",		    CLI.cli_name			As Owner_lending "
        sql = sql + ",		    LEN.lnd_enddate			As EndDate_lending "
        sql = sql + ",		    ITM.itm_photo			As Photo "
        sql = sql + ",		    STA.sta_descr			AS Status "
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
        sql = sql + "WHERE 		LEN.lnd_cliowner	    = CLI.cli_code "
        sql = sql + "AND		LEN.lnd_clirequester    = " + id + " "

        return pool.query(sql);
    };

    delete(id) { 
        return pool.query('DELETE FROM lendings WHERE lnd_code = ' + id);
    };

    update(conditions = []) { 

        var id;
        var cliowner;
        var clirequester;
        var startdate;
        var enddate;
        var grntmrg;
        var status;

        conditions.forEach( ({ field, value }) => {
                if (field === "id")
                    id = value;
                if (field === "cliowner")
                    cliowner = value;
                if (field === "clirequester")
                    clirequester = value;
                if (field === "startdate")
                    startdate = value;
                if (field === "enddate")
                    enddate = value;
                if (field === "grntmrg")
                    grntmrg = value;
                if (field === "status")
                    status = value;
            }
        );

        const strSQL = "UPDATE lendings SET "
                        + "lnd_cliowner = " + cliowner
                        + ", lnd_clirequester = " + clirequester
                        + ", lnd_startdate = '" + startdate
                        + "', lnd_enddate = '" + enddate
                        + "', lnd_grntmrg = " + grntmrg
                        + ", sta_code = " + status
                        + " WHERE lnd_code = " + id

        return pool.query(strSQL);
    };

    insert(conditions = []) { 

        var cliowner;
        var clirequester;
        var startdate;
        var enddate;
        var grntmrg;
        var status;

        conditions.forEach( ({ field, value }) => {
            if (field === "cliowner")
                cliowner = value;
            if (field === "clirequester")
                clirequester = value;
            if (field === "startdate")
                startdate = value;
            if (field === "enddate")
                enddate = value;
            if (field === "grntmrg")
                grntmrg = value;
            if (field === "status")
                status = value;
            }
        );

        const strSQL = "INSERT INTO lendings (lnd_cliowner, lnd_clirequester, lnd_startdate, lnd_enddate, lnd_grntmrg, sta_code) VALUES ("
                        + "'" + cliowner 
                        + "','" + clirequester
                        + "','" + startdate
                        + "','" + enddate
                        + "'," + grntmrg
                        + ",'" + status
                        + "')"

        return pool.query(strSQL);
    };
    

}

module.exports = Lendings;