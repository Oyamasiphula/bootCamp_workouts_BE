var express = require('express'),
    exphbs = require('express-handlebars'),
    session = require('express-session'),
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
app.set('trust proxy', 1) // trust first proxy
app.use(session({
    secret: 'keyboard cat',
    resave: false,
    saveUninitialized: true,
    cookie: {
        secure: true
    }
}))

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
  for (var key in session) {
    if (object.hasOwnProperty(key)) {
      console.log(session);
    }
  }
  var info = req.flash('info', 'Welcome')
    res.render("greet", {
      info : info
    });
});

app.post("/greet", greetFuncFile.greetRouter);

var port = process.env.PORT || 3001;

app.listen(port, () => {
    console.log('listening on *:' + port);
});
