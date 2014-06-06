/**
* Define base class.
*/
function Animal(name) {
  this.name = name;
}

Animal.prototype.getName = function() {
  return this.name;
}

/**
* Define sub class.
*/
function Dog() {
  Animal.call(this, "Dog");
  this.leg = 4;
}

Dog.prototype = Object.create(Animal.prototype);
Dog.prototype.constructor = Dog;
Dog.prototype.walk = function() {
  return "I can walk";
}

var dog = new Dog();
dog.name = "Pow"; // Pow
dog.getName(); // Pow
dog.walk(); // I can walk
