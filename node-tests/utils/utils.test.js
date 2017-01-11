const utils = require('./utils');

const expect = require('expect');

describe('Utils', () => {

  describe('#add', () => {
    it('should add two numbers', () => {
      var res = utils.add(33, 11);
      expect(res).toBe(44).toBeA('number');
    });

    it('should async add two numbers', (done) => {
      utils.asyncAdd(4, 3, (res) => {
        expect(res).toBe(7).toBeA('number');
        done();
      });
    });
  });

  it('should square a number', () => {
    var res = utils.square(2);
    expect(res).toBe(4).toBeA('number');
  });

  it('should async square a number', (done) => {
    utils.asyncSquare(3, (res) => {
      expect(res).toBe(9).toBeA('number');
      done();
    });
  });
});

it('should verify first and last names are set', () => {
  var user = {location: 'Canada', age: 27};
  var res = utils.setName(user, 'Benjamin Brenner');
  // expect(user).toEqual(res);
  expect(res).toInclude({
    firstName: 'Benjamin',
    lastName: 'Brenner'
  });
});
