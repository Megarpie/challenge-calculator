const assert = require('assert');
const calculator = require('../index');

describe('#1: Add max of two numbers using a comma delimiter', () => {
  it('should return 0 if empty string', () => {
    assert.equal(calculator.addTwo(''), 0);
  });
  it('should add two numbers', () => {
    assert.equal(calculator.addTwo('3,6'), 9);
  });
  it('should return single number with one number input', () => {
    assert.equal(calculator.addTwo('20'), 20);
  });
  it('should add two numbers with one invalid string', () => {
    assert.equal(calculator.addTwo('coffee, 50'), 50);
  });
  it('should add two numbers with two invalid strings', () => {
    assert.equal(calculator.addTwo('milk, tea'), 0);
  });
  it('should add only first two when more than two numbers inputed', () => {
    assert.equal(calculator.addTwo('4,5,6'), 9);
  });
});