const greetPersonUtil = require("./greet.js");

exports.greetRouter = (req, res, next) => {

  var actualName = req.body.specifyName;
  var actualLang = req.body.languages;
  
  // Set a flash message by passing the key, followed by the value, to req.flash().
  req.flash('message', 'Please enter a valid name!');

  res.render('greet', {
    greetedPerson: greetPersonUtil.greetFactory(actualLang, actualName).greet(actualName),
    counter: greetPersonUtil.greetFactory(actualLang, actualName).counter(actualName),
    message: req.flash('message')
  });
}
