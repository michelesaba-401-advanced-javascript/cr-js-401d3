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

  describe('with Promise', () => {
    it('resolves with data', () => {
      let file = `${__dirname}/../../data/file.txt`;

      return reader(file)
        .then(data => {
          expect(data).toBeDefined();
        });
    });

    it ('rejects with err', () => {
      let file = `${__dirname}/../../data/missing.txt`;

      return expect(reader(file))
        .rejects.toBeDefined();

      // return reader(file)
      //   .then(data => {
      //     return Promise.reject(); // Reject with nothing to force failure
      //   })
      //   .catch(err => {
      //     expect(err).toBeDefined();
      //   });
    })
  });

  describe('with async/await', () => {
    it('can await data', async () => {
      let file = `${__dirname}/../../data/file.txt`;

      let data = await reader(file);

      expect(data).toBeDefined();
    });

    it('can error with bad file name', async() => {
      let file = `${__dirname}/../../data/missing.txt`;

      try {
        let data = await reader(file);
        expect(data).not.toBeDefined();
      }
      catch(err){
        expect(err).toBeDefined();
      }
    });
  });
});
