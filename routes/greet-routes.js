const greetPersonUtil = require("./greet.js");

exports.greetRouter = (req, res) => {

    var actualName = req.body.specifyName;
    console.log(actualName);
    var actualLang = req.body.languages;
    console.log(actualLang);

    res.render('greet', {
        greetedPerson: greetPersonUtil.greet(actualLang, actualName)
    });
}
