var express = require('express'),
    exphbs = require('express-handlebars'),
    bodyParser = require('body-parser'),
    mongoose = require('mongoose'),
    greetFuncFile = require("./routes/greet-routes.js");


var app = express();

app.engine("handlebars", exphbs({
    defaultLayout: "main.handlebars"
}));

app.set("view engine", "handlebars");

app.use(express.static(__dirname + "/public"));
app.use(bodyParser.urlencoded({
    extended: false
}))
// parse application/json
app.use(bodyParser.json())

app.get("/", (req, res) => {
    console.log(req.body.submit);
    res.render("home");
});

//eg. dynamically routing
app.get("/home", (req, res) => {
    res.redirect("/");
});

app.get("/greet", (req, res) => {
    res.render("greet");
});

app.post("/greet", greetFuncFile.greetRouter);

var port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log('listening on *:' + port);
});
