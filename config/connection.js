const mysql = require("mysql")

const connection = mysql.createConnection({
    host: "localhost",
    database: "burgers_db",
    user: "root",
    password: "root",
    port: 8889

});

module.exports = connection
