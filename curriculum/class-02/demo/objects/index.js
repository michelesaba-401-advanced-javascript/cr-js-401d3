'use strict';

/**
 * Demonstrate the differences between the various ways
 * to create instances.  This should lead us from what
 * we have been using in 301 (constructor functions) and
 * into where we are headed in 401 (classes)
 *
 * This also introduces factory functions as another means
 * of comparison.
 */

//const Dog = require('./constructor');
// const Dog = require('./class');
const dogFactory = require('./factory');

// var doggy = new Dog('Jeff');
var doggy = dogFactory('Spike');
doggy.walk();
doggy.speak();
console.log(doggy.toString())

// console.log(doggy);

var speakDoggy = doggy.speak;
console.log(speakDoggy);
// speakDoggy(); // Breaks: no this!

var boundSpeakDoggy = speakDoggy.bind(doggy);
console.log('bound function', boundSpeakDoggy);
boundSpeakDoggy('Keith');

speakDoggy.call({
  name: 'Call Me'
}, 'Floyd');

speakDoggy.apply({
  name: 'Apply Me'
}, ['Alexander']);

console.log(Math.max(5,6,1,85,1,43));

var numbers = [123,123,5324,235,12,32,1];
// Doesn't work - NaN!
console.log(Math.max(numbers));

console.log(Math.max.apply(null, numbers))

// Or in newer JS, can use spread instead
console.log(Math.max(...numbers));
