
const express = require("express");
const bodyParser = require("body-parser");
const routes = require("./controllers/burgers_controllers.js")
const exphbs = require('express-handlebars');
const connection = require("./config/connection")

const app = express();
const PORT = 3000;


app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.engine('handlebars', exphbs({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars')

// Routes
app.use('/', routes)

// server listener
app.listen(PORT, function () {
    connection.connect(function (err) {
        if (err) {
            console.error('error connecting: ' + err.stack);
            return;
        }

        console.log('mysql connected as id ' + connection.threadId);
    });
    console.log(`App listening on PORT ${PORT}`);
});
