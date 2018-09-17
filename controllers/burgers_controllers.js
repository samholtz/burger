var express = require('express')
var router = express.Router()
var burgersModel = require("../models/burger")
// import model

router.get('/', function (req, res) {
    // using mySQL connection
    console.log("route / , getting all burgers")
    burgersModel.getAll(function (data) {
        console.log("getting burger data...")
        console.log(data)
        res.render("index", { burgers: data })

    })
})

router.post('/burgers', function (req, res) {
    console.log("route /burgerAdd, posting burger...")
    burgersModel.create([
        req.body.name
    ], function (result) {
        // res.json({ id: result.insertId });
        res.redirect("/")
    });
})

router.post("/burgers/:id", function (req, res) {
    console.log("updating burgers...")
    var id = req.params.id;


    burgersModel.update(id, function (result) {
        console.log(result)
        if (result.changedRows == 0) {
            // If no rows were changed, then the ID must not exist, so 404
            return res.status(404).end();
        } else {
            res.redirect("/")
        }
    });
});

module.exports = router;