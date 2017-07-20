const greetPersonUtil = require("./greet.js");
const greetPersonDataMod = require("../dataPart/greet-model");

exports.greetRouter = (req, res, cb) => {
  try {
    let actualName = req.body.specifyName;
    let actualLang = req.body.languages;
    let counter = greetPersonUtil.greetFactory(actualLang, actualName).counter()

    if (actualName.length >= 3) {
      var greetPerson = new greetPersonDataMod.personGreetings({
        "name": actualName,
        "count": counter
      });

      greetPerson.save(function(err, person) {
        if (err) {
          console.log(err);
        }
        res.redirect('/greet')
      });
      res.render('greet', {
        greetedPerson: greetPersonUtil.greetFactory(actualLang, actualName).greet(actualName),
        counter: counter
      });
    } else {
      // Set a flash message by passing the key, followed by the value, to req.flash().
      req.flash('message', 'Please enter valid name');
      // targeting the flash message to reference it with mustache/ hhelpers
      res.render('greet', {
        message: req.flash('message')
      });
    };
  } catch (e) {
    console.log(e);
    res.send(e);
  };
};
