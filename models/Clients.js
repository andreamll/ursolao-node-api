//----------
// ARQUIVO: MODELS > CLIENTS.JS
// OBJETIVO: MANIPULACAO DE DADOS RELACIONADOS AOS CLIENTES
//----------

var pool = require('./BaseModelMySQL')
const util = require('util')

class Clients{
    
    auth(conditions = []) { 

        var email;
        var password;

        conditions.forEach( ({ field, value }) => {
                if (field === "email")
                    email = value;
                if (field === "password")
                password = value;
            }
        );

        const strSQL = "CALL sps_clients(null,'" + email + "','" + password + "')" ;
        return pool.query(strSQL);

    };

    getById(id) { 
        const strSQL = "CALL sps_clients(" + id +",null ,null)" ;
        return pool.query(strSQL);
    };

    update(conditions = []) { 

        var id;
        var name;
        var email;
        var password;
        var countrycode;
        var areacode;
        var telephone;
        var zipcode;

        conditions.forEach( ({ field, value }) => {
                if (field === "id")
                    id = value;
                if (field === "name")
                    name = value;
                if (field === "email")
                    email = value;
                if (field === "password")
                    password = value;
                if (field === "countrycode")
                    countrycode = value;
                if (field === "areacode")
                    areacode = value;
                if (field === "telephone")
                    telephone = value;
                if (field === "zipcode")
                    zipcode = value;
            }
        );

        const strSQL = "CALL spu_clients(" + id + ", '" + name + "', '" + email + "', '" + password + "', " + countrycode + ", " + areacode + ", " + telephone + ", " + zipcode + ")"
        return pool.query(strSQL);
    };

    insert(conditions = []) { 

        var name;
        var email;
        var password;
        var countrycode;
        var areacode;
        var telephone;
        var zipcode;

        conditions.forEach( ({ field, value }) => {
                if (field === "name")
                    name = value;
                if (field === "email")
                    email = value;
                if (field === "password")
                    password = value;
                if (field === "countrycode")
                    countrycode = value;
                if (field === "areacode")
                    areacode = value;
                if (field === "telephone")
                    telephone = value;
                if (field === "zipcode")
                    zipcode = value;
            }
        );

        const strSQL = "CALL spi_clients('" + name + "', '" + email + "', '" + password + "', " + countrycode + ", " + areacode + ", " + telephone + ", " + zipcode + ")"
        return pool.query(strSQL);
    };

}

module.exports = Clients;