'use strict';

exports.readFile = (file, cb) => {
  if( file.match(/bad/i) ) {
    cb(`${file} error!`);
  }
  else {
    cb(undefined, Buffer.from(`${file} contents!`));
  }
};