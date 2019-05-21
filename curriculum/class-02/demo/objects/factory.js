'use strict';

const animalFactory = (name) => {
  console.log("Animal factory this", this);
  return {
    name,
    //name: name,
    walk: () => {
      console.log('Walking...');
      console.log('this in arrow function', this);
    }
  };
};

const dogFactory = function(name) {
  console.log('dogFactory!')

  let dog = Object.assign(
    animalFactory(name),
    { speak },
    {
      toString: function() {
        return `Dog: ${this.name}`;
      }
    },
    { hungry: true }
  );

  return runMixin(dog);

  // var dog = animalFactory(name);
  // dog.speak = speak;
  // return dog;

  function speak(toMe) {
    console.log(`My name is ${this.name}` +
      (toMe ? `, ${toMe}` : ''));
  }
}

function runMixin(animal) {
  animal.run = function(howFast) {
    console.log(`Running ${howFast} fast!`);
  }

  return animal;
}

module.exports = dogFactory;
