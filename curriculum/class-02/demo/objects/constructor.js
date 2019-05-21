'use strict';

const Animal = function(name) {
  this.name = name;
  console.log('this inside Animal', this);
}

/*
// We would have done this pre-const
function Animal(name) {
  this.name = name;
}
*/

Animal.prototype.walk = () => {
  console.log('Walking...');
  console.log('this in arrow function', this);
  // Can't use this because we have an arrow function
}

const Dog = function(name) {
  Animal.call(this, name);
  console.log('this inside Dog', this);
}

Dog.prototype = new Animal();

Dog.prototype.speak = function() {
  console.log(`My name is ${this.name}`);
}

Dog.prototype.toString = function() {
  return `Dog: ${this.name}`;
}

module.exports = Dog;
