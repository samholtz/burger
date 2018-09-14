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

router.post('/burgerAdd', function (req, res) {
    console.log("route /burgerAdd, posting burger...")

})

module.exports = router;