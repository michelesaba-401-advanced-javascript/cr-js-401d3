'use strict';

const fs = require('fs');

module.exports = function (filename, callback) {
  if (!callback) {
    // return a promise instead!
    return new Promise((resolve, reject) => {
      fs.readFile(filename, (err, data) => {
        if (err)
        {
          console.log('file err! rejecting!', err);
          return reject(err);
        }

        console.log('file success! resolving!', data);
        resolve(data);
      })
    });
  }

  fs.readFile(filename, (err, data) => {
    if (err) {
      console.error(err);
      return callback(err);
    }

    console.log(data.toString());

    callback(null, data);
  });
};
