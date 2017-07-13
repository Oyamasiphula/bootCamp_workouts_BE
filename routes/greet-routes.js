const greetPersonUtil = require("./greet.js");

exports.greetRouter = (req, res) => {

  var actualName = req.body.specifyName;
  var actualLang = req.body.languages;

  res.render('greet', {
    greetedPerson: greetPersonUtil.greetFactory(actualLang, actualName).greet(actualName),
    counter: greetPersonUtil.greetFactory(actualLang, actualName).counter(actualName)
  });
}
