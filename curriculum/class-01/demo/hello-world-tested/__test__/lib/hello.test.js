'use strict';

const hello = require('../../lib/hello');

describe('sayHello', () => {
  it('returns hello john given john', () => {
    const res = hello.sayHello('john');

    expect(res).toBe('hello john');
  });

  it ('returns hello bob given bob', () => {
    const res = hello.sayHello('bob');

    expect(res).toBe('hello bob');
  });
});

describe('sayGoodbye', () => {
  it ('returns goodbye', () =>{
    const res = hello.sayGoodbye();

    expect(res).toBe('Goodbye');
  });
});
