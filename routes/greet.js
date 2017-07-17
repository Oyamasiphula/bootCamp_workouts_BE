var counterVal = 0;


exports.greetedPersonObj = {};
let greetFuncUtil = require('./greet');
var greetedPerson = greetFuncUtil.greetedPersonObj;


exports.greetFactory = (langRadioOpt, name) => {

  let counter = (name) => {

    if (greetedPerson[name] === undefined) {
      // let counterVal = ;
      greetedPerson[name] = 0;
    }
    greetedPerson[name] = greetedPerson[name] + 1;
    // console.log(greetedPerson);
    return greetedPerson[name];
  }

  let greet = (name) => {

    if (langRadioOpt === "Sotho") {
      return "Dumela, " + name;
    };
    if (langRadioOpt === "Xhosa") {
      return "Molo, " + name;
    };
    if (langRadioOpt === "English") {
      return "Hello, " + name;
    };
  };

  let allNamesGreetedCounter = () => {
    var list = [];
    for (var people in greetedPerson) {
      list.push(people);
    }
    console.log(list);
    return list.length;
  };

  let timesEachPersonGreeted = (name) => {
    return greetedPerson[name];
  };

  let greetedPeopleObj = () => {
    for (var name in greetedPerson) {
      if (name.length < 3) {
        delete greetedPerson[name];
      }
    };
    return greetedPerson;
  };

  return {
    counter,
    greet,
    allNamesGreetedCounter,
    timesEachPersonGreeted,
    greetedPeopleObj
  };
}
