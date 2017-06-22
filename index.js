var express = require('express'),
    exphbs = require('express-handlebars'),
    bodyParser = require('body-parser'),
    mongoose = require('mongoose');


var app = express();
var jsonParser = bodyParser.json()

app.engine("handlebars", exphbs({
    defaultLayout: "main.handlebars"
}));
app.set("view engine", "handlebars");

var urlencodedParser = bodyParser.urlencoded({
    extended: false
})

app.use(express.static(__dirname + "/public"));

app.get("/", (req, res) => {
    res.render("home");
});
//eg. dynamically routing
app.get("/home", (req, res) => {
    res.redirect("/");
});

app.get("/greet", (req, res) => {
    res.render("greet");
});

app.post("/greet", (req, res) => {
    var name = req.body.specifyName;
    console.log(name);
    res.send(name);
})

var port = process.env.port || 3000;

app.listen(port, () => {
    console.log('listening on *:' + port);
});
