var Calculator = require('../../public/js/calculator.js')
var assert = require('assert')

describe('calculator', function () {
  beforeEach(function () {
    calculator = new Calculator()
  });

  // write unit tests here in the form of "it should do something..."
  it('it has a sample test', function(){
    assert.equal(true, true)
  })

  it('can add two numbers', function() {
    calculator.previousTotal = 1
    calculator.add(4)
    assert.equal(5, calculator.runningTotal)
  })

  it('can subtract', function() {
    calculator.previousTotal = 7;
    calculator.subtract(4);
    assert.equal(3, calculator.runningTotal)
  })

  it('can multiply', function() {
    calculator.previousTotal = 5;
    calculator.multiply(3);
    assert.equal(15, calculator.runningTotal)
  })

  it('can divide', function() {
    calculator.previousTotal = 21;
    calculator.divide(7);
    assert.equal(3, calculator.runningTotal)
  })

  it('concatenate multiple button clicks', function() {
    calculator.runningTotal = 0;
    calculator.numberClick(1);
    calculator.numberClick(2);
    calculator.numberClick(3);
    assert.equal("123", calculator.runningTotal)
  })

  it('can chain multiple operations', function(){
    calculator.numberClick(5);
    calculator.operatorClick('+');
    calculator.numberClick(1);
    calculator.operatorClick('*');
    calculator.numberClick(2);
    calculator.operatorClick('=');
    assert.equal(12, calculator.runningTotal)
  })

  it('can clear running total without affecting calc', function() {
    calculator.numberClick(5);
    calculator.operatorClick('+');
    calculator.numberClick(1);
    calculator.operatorClick('=');
    calculator.operatorClick('+');
    calculator.numberClick(2);
    calculator.clearClick()
    assert.equal(6, calculator.previousTotal)
    assert.equal(0, calculator.runningTotal)
  })

});
