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

        const strSQL = "SELECT cli_code as id FROM clients WHERE cli_email = '" + email 
                        + "' AND cli_password = '" + password + "'" 

        return pool.query(strSQL);

        
    };

    getById(id) { 
        return pool.query('SELECT * FROM clients WHERE cli_code = ' + id);
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

        const strSQL = "UPDATE clients SET "
                        + "cli_name = '" + name
                        + "', cli_email = '" + email
                        + "', cli_password = '" + password
                        + "', cli_countrycode = '" + countrycode
                        + "', cli_areacode = '" + areacode
                        + "', cli_telephone = '" + telephone
                        + "', cli_zipcode = '" + zipcode
                        + "' WHERE cli_code = " + id

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

        const strSQL = "INSERT INTO clients (cli_name, cli_email, cli_password, cli_countrycode, cli_areacode, cli_telephone, cli_zipcode) VALUES ("
                        + "'" + name 
                        + "','" + email
                        + "','" + password
                        + "','" + countrycode
                        + "','" + areacode
                        + "','" + telephone
                        + "','" + zipcode
                        + "')"

        return pool.query(strSQL);
    };

}

module.exports = Clients;