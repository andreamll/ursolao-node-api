/*
const Sequelize = require("../models/BaseModel")

console.log ("modo teste");

const sequelize = new Sequelize;
sequelize.Database.connect;

console.log ("fim");
*/

/*
-- CODIGO Q FUNCIONA
var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "@Ursolao1",
  database: "ursolao"
});

con.connect(function(err) {
    if (err) throw err;
    //Select all customers and return the result object:
    con.query("SELECT * FROM categories_items", function (err, result, fields) {
      if (err) throw err;
      console.log(result);
    });
  });
  */

 const baseModel = require("../models/BaseModelMySQL")

 baseModel.execSQLQuery ("SELECT * FROM categories_items");