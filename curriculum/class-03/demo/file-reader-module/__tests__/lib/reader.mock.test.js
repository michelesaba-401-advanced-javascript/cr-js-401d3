'use strict';

// When mocking out embedded modules like fs or buffer, you have to tell jest to mock it
// For 3rd party modules, you can "auto" mock them by simply putting them in the correct __mocks__ folder
jest.mock('fs');

// You have to mock before require
const reader = require('../../lib/reader.js');

const goodFile = 'file.txt';
const badFile = 'bad-file.txt'; // mock will error for any filename with 'bad'

describe('File Reader Module with mock fs', () => {

  it('can read a file', done => {
    reader(goodFile, (err, data) => {
      expect(err).toBeNull();
      expect(data).toBeDefined();
      expect(data.toString()).toBe('file.txt contents!');
      done();
    });
  });

  it('calls callback with error for bad file', done => {
    reader(badFile, (err) => {
      expect(err).toBe('bad-file.txt error!');
      done();
    })
  })

  describe('with Promise', () => {
    it('resolves with data', () => {
      return reader(goodFile)
        .then(data => {
          expect(data).toBeDefined();
          expect(data.toString()).toBe('file.txt contents!');
        });
    });

    it ('rejects with err', () => {
      return expect(reader(badFile))
        .rejects.toBe('bad-file.txt error!');

      // return reader(file)
      //   .then(data => {
      //     return Promise.reject(); // Reject with nothing to force failure
      //   })
      //   .catch(err => {
      //     expect(err).toBe('bad-file.txt error!');
      //   });
    })
  });

  describe('with async/await', () => {
    it('can await data', async () => {
      let data = await reader(goodFile);

      expect(data).toBeDefined();
      expect(data.toString()).toBe('file.txt contents!');
    });

    it('can error with bad file name', async() => {
      try {
        let data = await reader(badFile);
        expect(data).not.toBeDefined();
      }
      catch(err) {
        expect(err).toBe('bad-file.txt error!');
      }
    });
  });
});
