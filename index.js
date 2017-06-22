var express = require('express'),
    exphbs = require('express-handlebars'),
    bodyParser = require('body-parser'),
    mongoose = require('mongoose'),
    greetUtil = require("./routes/greet.js");


var app = express();

app.engine("handlebars", exphbs({
    defaultLayout: "main.handlebars"
}));

app.set("view engine", "handlebars");

app.use(express.static(__dirname + "/public"));

app.use(bodyParser.urlencoded({
    extended: false
}));

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

var greetedPeople = [];

app.post("/greet", (req, res) => {

    var actualName = req.body.specifyName;
    var actualLang = req.body.languages;
    var count = 0;

    console.log(greetedPeople);
    res.render('greet', {
      greetedPerson : greetUtil.greet(actualLang, actualName)
    });

});

var port = process.env.port || 3000;

app.listen(port, () => {
    console.log('listening on *:' + port);
});
