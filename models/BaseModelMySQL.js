//----------
// ARQUIVO: MODELS > BASEMODEL.JS
// OBJETIVO: COMUNICACAO COM BD
//----------

const util = require('util')
const mysql = require('mysql')
const bdConfig = require("../config/database");

const pool = mysql.createPool({ ...bdConfig })

pool.getConnection((err, connection) => {
    if (err) {
        if (err.code === 'PROTOCOL_CONNECTION_LOST') {
            console.error('Database connection was closed.')
        }
        if (err.code === 'ER_CON_COUNT_ERROR') {
            console.error('Database has too many connections.')
        }
        if (err.code === 'ECONNREFUSED') {
            console.error('Database connection was refused.')
        }
    }
    if (connection) connection.release()
    return
})

//Promisify for Node.js async/await.
//Eh aqui que a magica acontece...
pool.query = util.promisify(pool.query)

module.exports = pool