
const express = require("express");
const bodyParser = require("body-parser");
const routes = require("./controllers/burgers_controllers.js")
const exphbs = require('express-handlebars');
const connection = require("./config/connection")

const app = express();
const PORT = process.env.PORT || 3000;


app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.engine('handlebars', exphbs({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars')


app.use(express.static("public"))

// Routes
app.use('/', routes)

// server listener

connection.connect(function (err) {
    if (err) {
        console.error('error connecting: ' + err.stack);
        return;
    }

    console.log('mysql connected as id ' + connection.threadId);

    app.listen(PORT, function () {
        console.log(`App listening on PORT ${PORT}`);
    })
});


