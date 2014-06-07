(function(){

  /*
  * Hoists variable to the top of scope.
  */
  function test() {
    console.log("Hello, " + name);
    var name = "wk";
  }

  // Start here.
  test(); // Hello, undefined

})();
