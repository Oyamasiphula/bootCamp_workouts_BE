var count = 0;

exports.module = {

    greet: () => {

        let langRadioOpt = req.body.language
        let name = req.body.specifyName

        if (langRadioOpt === "Sotho") {
            return "Dumela, " + name;
        };
        if (langRadioOpt === "Xhosa") {
            return "Molo, " + name;
        };
        if (langRadioOpt === "English") {
            return "Hello, " + name;
        };
    }

}
