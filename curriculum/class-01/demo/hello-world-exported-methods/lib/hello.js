'use strict';

// Rather than return a function, this time, we are exposing an object through module.exports
module.exports.sayHello = function() {
  console.log('hello!');
}

exports.moduleName = 'Hello Demo';

exports.isJacobAwesome = function() {
  return !Math.round(Math.random(1));
}

// Replace previous exports with new stuff
module.exports = exports = {
  sayHello: function(name) {
    //console.log('I said don\'t do this, ' + name);
    console.log(makeHelloMessage(name));
  },
  getPath: function() {
    return __dirname;
  }
}

console.log(exports);

// Here, we're exporting a method called "sayHello".
// Notice that it calls an internal helper function to do it's job
// That function is not part of our interface, as it is not exported

// Export another function

// Internal Helper Function -- because this is not hung on the module.exports object, this is not
// exported as a part of our interface

function makeHelloMessage(name) {
  return `hello, ${name}`;
}
