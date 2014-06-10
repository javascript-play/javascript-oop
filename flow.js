
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
