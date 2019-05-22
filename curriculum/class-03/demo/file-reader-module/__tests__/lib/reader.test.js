'use strict';

const reader = require('../../lib/reader.js');

describe('File Reader Module', () => {

  it('can read a file', done => {
    let file = `${__dirname}/../../data/file.txt`;
    // let file = `./data/file.txt`; // This works, too, but only by luck
    console.log(file);

    reader(file, (err, data) => {
      expect(err).toBeNull();
      expect(data).toBeDefined();
      done();
    });
  });

  it('calls callback with error for bad file', done => {
    let file = `${__dirname}/../../data/missing.txt`;

    reader(file, (err) => {
      expect(err).toBeDefined();
      done();
    })
  })
});
