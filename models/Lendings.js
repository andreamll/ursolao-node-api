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
        return pool.query('SELECT * FROM lendings WHERE (lnd_cliowner = ' + id + ' OR lnd_clirequester = ' + id + ')' );
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