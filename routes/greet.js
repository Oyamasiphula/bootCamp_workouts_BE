exports.greet = (langRadioOpt, name) => {
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
