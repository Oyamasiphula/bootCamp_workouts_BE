var express = require('express'),
    exphbs = require('express-handlebars'),
    mongoose = require('mongoose');


var app = express();

app.engine("handlebars", exphbs({defaultLayout : "main.handlebars" }));
app.set("view engine", "handlebars");

app.use(express.static(__dirname + "/public"));

app.get("/", function (req,res) {
    res.render("home");
});
//eg. dynamically routing
app.get("/home", function (req,res) {
    res.redirect("/");
});

app.get("greet",function(){

})

var port = process.env.port || 3000;

app.listen( port, function(){
  console.log('listening on *:' + port);
});
