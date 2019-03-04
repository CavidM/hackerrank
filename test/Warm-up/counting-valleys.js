const chai = require('chai');
var assert = chai.assert;

const countingValleys = require('../../Warm-up/counting-valleys');

describe('Counting Valleys', function() {
    it('should return 1', function() {
      assert.equal(countingValleys('UDDDUDUU'), 1);
    });
    it('should return 2', function() {
      assert.equal(countingValleys('DDUUDDUDUUUD'), 2);
    });
  });