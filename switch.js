
/**
* We can use = in switch.
* Refernce from express.js source code.
* See: express/lib/request.js
* Please run this code with nodeunit.
*/

exports.testSwitch = function(test) {
  var name = "Wk";
  switch(name = name.toLowerCase()) {
    case "wk":
      test.ok("Work");
      break;
    default:
      test.failed("No");
  }
  test.done();
}
