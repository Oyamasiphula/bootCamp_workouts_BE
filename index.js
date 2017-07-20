var express = require('express'),
  exphbs = require('express-handlebars'),
  session = require('express-session'),
  flash = require('connect-flash'),
  bodyParser = require('body-parser'),
  mongoose = require('mongoose'),
  cookieParser = require('cookie-parser'),
  greetFuncFile = require("./routes/greet-routes.js"),
  greetUtil = require("./routes/greet.js");

var db = 'mongodb://localhost/greet';

mongoose.connect(db, {
  useMongoClient: true
})

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
  cookie: {
    maxAge: 60000
  },
  secret: 'woot',
  resave: false,
  saveUninitialized: false
}));

app.use(flash());

app.get("/", (req, res) => {
  res.render("home");
});

app.get("/counter/:username", (req, res) => {
  var username = req.params.username
  console.log(greetUtil.greetedPersonObj[username]);
  res.send(JSON.stringify(greetUtil.greetedPersonObj[username]));
});
//eg. dynamically routing
app.get("/home", (req, res) => {
  res.redirect("/");
});


app.get("/greet", (req, res) => {
  res.render("greet")
});

app.post("/greet", greetFuncFile.greetRouter);

var port = process.env.PORT || 3001;

app.listen(port, () => {
  console.log('listening on *:' + port);
});
