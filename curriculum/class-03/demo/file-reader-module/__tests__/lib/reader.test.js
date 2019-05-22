'use strict';

const reader = require('../../lib/reader.js');

describe('File Reader Module', () => {

  it('can read a file', done => {
    let file = `${__dirname}/../data/file.txt`;

    reader(file, (err, data) => {
      expect(data).toBeDefined();
      done();
    });
  });
});
