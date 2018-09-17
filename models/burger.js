// Model
const burgersORM = require("../config/orm")

var model = {
    getAll: (callback) => {
        burgersORM.getAllBurgers(callback)
    },
    create: function (name, cb) {
        console.log("I am the name" + name)
        burgersORM.create(name, function (res) {
            cb(res);
        });
    },
    update: function (id, cb) {
        burgersORM.update(id, function (res) {
            cb(res);
        });
    }
}

module.exports = model;