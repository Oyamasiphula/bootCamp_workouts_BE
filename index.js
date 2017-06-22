var express = require('express'),
    exphbs = require('express-handlebars'),
    bodyParser = require('body-parser'),
    mongoose = require('mongoose');


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
    //var name = req.body.specifyName;
    //console.log(name);
    //console.log(req.body.submit);
    res.render("greet");
});

var greetedPeople = [];

app.post("/greet", (req, res) => {

    var name = req.body.specifyName;
    var language = req.body.languages;
    var count = 0;

    greetedPeople.push({
        "name": name
    });

    console.log(greetedPeople);
    res.render('greet', {
      greetedPerson : greetedPeople
    });
});

var port = process.env.port || 3000;

app.listen(port, () => {
    console.log('listening on *:' + port);
});
