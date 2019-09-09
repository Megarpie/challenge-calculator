const assert = require('assert');
const calculator = require('../index');

describe('#2: Add unlimited number of numbers', () => {
  it('should return 0 if empty string', () => {
    assert.equal(calculator.add(''), 0);
  });
  it('should add two numbers', () => {
    assert.equal(calculator.add('3,6'), 9);
  });
  it('should return single number with one number input', () => {
    assert.equal(calculator.add('20'), 20);
  });
  it('should add two numbers with one invalid string', () => {
    assert.equal(calculator.add('coffee, 50'), 50);
  });
  it('should add two numbers with two invalid strings', () => {
    assert.equal(calculator.add('milk, tea'), 0);
  });
  it('should add unlimted number of numbers', () => {
    assert.equal(calculator.add('1,2,3,4,5,6,7,8,9,10'), 55);
  });
  it('should add unlimted number of numbers with invalid strings', () => {
    assert.equal(calculator.add('juice,2,3,4,horchata,6,7,8,9,10'), 49);
  });
});