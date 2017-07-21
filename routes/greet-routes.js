const greetPersonUtil = require("./greet.js"),
  greetPersonDataMod = require("../dataPart/greet-model");

exports.getGreet = (req, res) => {
  let actualName = req.body.specifyName;
  let actualLang = req.body.languages;

  res.render('greet')

  // res.render('greet', {
  //   greetedPerson: greetPersonUtil.greetFactory(actualLang, actualName).greet(actualName),
  //   counter: greetPersonUtil.greetFactory(actualLang, actualName).counter()
  // });
};

exports.insertGreetData = (req, res) => {
  try {
    let actualName = req.body.specifyName;
    let actualLang = req.body.languages;
    let counter = greetPersonUtil.greetFactory(actualLang, actualName).counter()

    console.log(actualName.length)

    if (actualName.length >= 3) {
      var greetPerson = new greetPersonDataMod.personGreetings({
        "name": actualName,
        "counter": counter
      });
      greetPerson.save(function(err, person) {
        if (err) {
          console.log(err);
        }
        res.redirect('/greet')
      });
    };
  } catch (e) {
    console.log(e);
    res.send(JSON.stringify(e));
  };
};
