const assert = require('assert');
const expect = require('chai').expect;
const calculator = require('../index');

describe('#1: Support a maximum of 2 numbers using a comma delimiter', () => {
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
  // commented out because of modified code to allow unlimited numbers
  // it('should add only first two when more than two numbers inputed', () => {
  //   assert.equal(calculator.addTwo('4,5,6'), 9);
  // });
});

describe('#2: Support a maximum of 2 numbers using a comma delimiter', () => {
  it('should add unlimted number of numbers', () => {
    assert.equal(calculator.add('1,2,3,4,5,6,7,8,9,10'), 55);
  });
  it('should add unlimted number of numbers with invalid strings', () => {
    assert.equal(calculator.add('juice,2,3,4,horchata,6,7,8,9,10'), 49);
  });
});

describe('#3: Support newline character as an alternative delimiter', () => {
  it('should add two numbers with newline', () => {
    assert.equal(calculator.add('1\\n5'), 6);
  });
  it('should add numbers with combination of commas and newlines', () => {
    assert.equal(calculator.add('2,4\\n6\\n8'), 20);
  });
});

describe('#4: Deny negative numbers. An exception should be thrown that includes all of the negative numbers provided', () => {
  it('should throw exception with one negative number', () => {
    expect(() => calculator.add('-1')).to.throw('Negative numbers not allowed: -1');
  });
  it('should throw exception with mix of negative numbers and positive numbers', () => {
    expect(() => calculator.add('4,-5,10')).to.throw('Negative numbers not allowed: -5');
  });
  it('should throw exception with mix of negative numbers, positive numbers, and invalid strings', () => {
    expect(() => calculator.add('2,owl,fox,-4,9')).to.throw('Negative numbers not allowed: -4');
  });
  it('should throw exception with mix of negative numbers and positive numbers', () => {
    expect(() => calculator.add('1\\n-3,-9')).to.throw('Negative numbers not allowed: -3,-9');
  });
});

describe('#5: Ignore any number greater than 1000', () => {
  it('should add two numbers with one greater than 1000', () => {
    assert.equal(calculator.add('1\\n1001'), 1);
  });
  it('should add multiple numbers with numbers greater than 1000', () => {
    assert.equal(calculator.add('1,5,5000\\n5'), 11);
  });
  it('should add multiple numbers with numbers greater than 1000 and invalid strings', () => {
    assert.equal(calculator.add('2,pie,3030,8'), 10);
  });
});

describe('#6: Support 1 custom single character length delimiter', () => {
  it('should add numbers with custom delimiter', () => {
    assert.equal(calculator.add('//*\\n1*2'), 3);
  });
  it('should add numbers with custom delimiter and alternative delimiters', () => {
    assert.equal(calculator.add('//$\\n2\\n1$5\\n6$0'), 14);
  });
  it('should add numbers with custom delimiter and alternative delimiters and invalid strings', () => {
    assert.equal(calculator.add('//#\\n2#2,hello#world\\n8'), 12);
  });
});