exports.greetFactory = (langRadioOpt, name) => {
    if (name === "") {
      alert("Please enter a valid name");
      return
    }

    var counter = (name) => {
        if (greetedPerson[name] === undefined) {
            greetedPerson[name] = 0;
        }
        if (name === "" && name.length) {
          conalole.log("Please enter a valid name");
          return
        }
        greetedPerson[name] += 1;
        console.log(greetedPerson[name]);
        return greetedPerson[name];
    }

    var greet = () => {
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

    return {
          counter,
          greet
    };
}
