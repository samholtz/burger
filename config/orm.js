const connection = require("./connection")

const burgersDB = {
    getAllBurgers: (cb) => {
        console.log("get all burgers running")
        var selectQuery = `SELECT * FROM burgers`
        connection.query(selectQuery, (error, results) => {
            if (error) throw error;
            cb(results);
        })
    }

}
// export burgersDB
module.exports = burgersDB;