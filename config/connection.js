const mysql = require("mysql")
var connection;

if (process.env.JAWSDB_URL) {
    connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
    connection = mysql.createConnection({
        host: "localhost",
        database: "burgers_db",
        user: "root",
        password: "root",
        port: 8889

    });
}


// connection.connect();
module.exports = connection;
