'use strict';

class Animal {
  constructor(name) {
    this.name = name;
    console.log('this inside Animal', this);
  }

  walk() {
    console.log('Walking...with class');
  }

  toString() {
    return `Animal: ${this.name}`;
  }
}

class Dog extends Animal {
  constructor(name, age) {
    super(name);

    this.age = age;
    this.hungry = true;
    console.log('this inside Dog', this);
  }

  speak() {
    console.log(`My name is ${this.name}`);
  }

  toString() {
    return `Dog: ${this.name}`;
  }
}

module.exports = Dog;
