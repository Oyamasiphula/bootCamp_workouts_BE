var greetedPerson = {};
var counterVal = 0;

exports.greetFactory = (langRadioOpt, name) => {
  if (name === "") {
    alert("Please enter a valid name");
    return
  }

  var counter = (name) => {
    if (greetedPerson[name] === undefined) {
      let counterVal = 0;
      greetedPerson[name] = counterVal;
    }
    counterVal++
    greetedPerson[name] = counterVal;
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
