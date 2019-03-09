const chai = require('chai');
var assert = chai.assert;

const repeatedString = require('../../Warm-up/repeated-string');

describe('Repeated String', function() {
    it('should return 7', function() {
      assert.equal(repeatedString('aba', 10), 7);
    });
    it('should return 10000', function() {
      assert.equal(repeatedString('a', 10000), 10000);
    });
  });