var express = require('express'),
    exphbs = require('express-handlebars'),
    session = require('express-session'),
    bodyParser = require('body-parser'),
    bodyParser = require('body-parser'),
    cookieParser = require('cookie-parser'),
    flash = require('express-flash'),
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
app.set('trust proxy', 1) // trust first proxy
app.use(session({
    secret: 'keyboard cat',
    resave: false,
    saveUninitialized: true,
    cookie: {
        secure: true
    }
}))
// app.use(exprcookieParser('keyboard cat'));
// app.use(express.session({
//     cookie: {
//         maxAge: 60000
//     }
// }));
app.use(flash());

app.get("/", (req, res) => {
    console.log(req.body.submit);
    res.render("home");
});

//eg. dynamically routing
app.get("/home", (req, res) => {
    res.redirect("/");
});

app.get("/greet", (req, res) => {
  var info = req.flash('info', 'Welcome')
    res.render("greet", {
      info : info
    });
});

app.post("/greet", greetFuncFile.greetRouter);

var port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log('listening on *:' + port);
});
