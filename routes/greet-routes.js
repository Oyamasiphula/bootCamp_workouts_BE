const greetPersonUtil = require("./greet.js");

exports.greetRouter = (req, res, cb) => {

  var actualName = req.body.specifyName;
  var actualLang = req.body.languages;

  if (actualName.length <= 3) {
    // Set a flash message by passing the key, followed by the value, to req.flash().
    req.flash('message', 'Please enter valid name');
    // Then respond with the set connect-flash
    res.render('greet', {
      message: req.flash('message')
    });
    return;
  } else {

    res.render('greet', {
      greetedPerson: greetPersonUtil.greetFactory(actualLang, actualName).greet(actualName),
      counter: greetPersonUtil.greetFactory(actualLang, actualName).counter(actualName)
    });
  };
};
