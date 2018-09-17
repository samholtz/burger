const connection = require("./connection")

const burgersDB = {
    getAllBurgers: (cb) => {
        console.log("get all burgers running")
        var selectQuery = `SELECT * FROM burgers`
        connection.query(selectQuery, (error, results) => {
            if (error) throw error;
            cb(results);
        })
    },
    create: function (name, cb) {
        var queryString = "INSERT INTO burgers (devoured, burger_name) VALUES ('0', '";
        console.log(queryString)

        queryString += name;
        queryString += "')";

        connection.query(queryString, function (err, result) {
            if (err) {
                throw err;
            }
            cb(result);
        });
    },

    update: function (id, cb) {
        var queryString = "UPDATE burgers SET devoured = '1' WHERE id = " + id;

        console.log(queryString);
        connection.query(queryString, function (err, result) {
            if (err) {
                throw err;
            }
            cb(result);
        });
    }
}
// export burgersDB
module.exports = burgersDB;