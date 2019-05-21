'use strict';

// Pull in our 'hello' module
const hello = require('./lib/hello');

// What is 'hello?'  As you'll see from this console.log, it's an object with 2 methods and one property
// The 2 methods are the ones that are attached to the "exports" object in the module we required in.
console.log(hello);

// sayHello() returns a value to us, so we'll capture that
hello.sayHello();

console.log(hello.getPath());


const hello2 = require('./lib/hello2');
console.log('hello2', hello2);

console.log(hello2.sayHello());
