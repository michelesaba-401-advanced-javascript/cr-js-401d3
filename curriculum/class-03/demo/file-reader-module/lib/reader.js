'use strict';

const fs = require('fs');

module.exports = function (filename, callback) {
  fs.readFile(filename, (err, data) => {
    if (err) {
      console.error(err);
      return callback(err);
    }

    console.log(data.toString());

    callback(null, data);
  });
};
