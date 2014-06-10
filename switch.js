
/**
* We can use = in switch.
* Refernce from express.js source code.
* See: express/lib/request.js
*/

exports.testSwitch = function(test) {
  var name = "Wk";
  switch(name = name.toLowerCase()) {
    case "wk":
      console.log("work");
      break;
    default:
      console.log("failed");
  }

  test.ok("= in switch is ok.");
  test.done();
}
