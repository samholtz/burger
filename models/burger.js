// Model
const burgersORM = require("../config/orm")

var model = {
    getAll: (callback) => {
        burgersORM.getAllBurgers(callback)
    }
}

module.exports = model;