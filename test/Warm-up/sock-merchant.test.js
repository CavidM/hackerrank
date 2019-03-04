// var describe = require('mocha').describe;
const chai = require('chai');
var assert = chai.assert;

const sockMerchant = require('../../Warm-up/sock-merchant');

describe('sock merchant', function() {
    it('should return 3', function() {
      assert.equal(sockMerchant([10, 20, 20, 10, 10, 30, 50, 10, 20]), 3);
    });
    it('should return 2', function() {
      assert.equal(sockMerchant([1,2,3,1,2]), 2);
    });
    it('should return 3', function() {
      assert.equal(sockMerchant([1,2,3,1,2,3]), 3);
    });
  });