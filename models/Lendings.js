//----------
// ARQUIVO: MODELS > LENDINGS.JS
// OBJETIVO: MANIPULACAO DE DADOS RELACIONADOS AOS EMPRESTIMOS
//----------

var pool = require('./BaseModelMySQL')
const util = require('util')

class Lendings{

    getById(id) { 
        const strSQL = "CALL sps_lendings(" + id + ", null)" ;
        return pool.query(strSQL);
    };

    getByClient(id) { 
        const strSQL = "CALL sps_lendings(null, " + id +")" ;
        return pool.query(strSQL);
    };

    delete(id) { 
        const strSQL = "CALL spd_lendings(" + id + ")" ;
        return pool.query(strSQL);
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

        const strSQL = "CALL spu_lendings(" + id + "," + cliowner + "," + clirequester + ",'" + startdate + "','"  + enddate + "'," + grntmrg + ",'" + status + "')" ;
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

        const strSQL = "CALL spi_lendings(" + cliowner + "," + clirequester + ",'" + startdate + "','"  + enddate + "'," + grntmrg + ",'" + status + "')" ;
        return pool.query(strSQL);
    };
    

}

module.exports = Lendings;