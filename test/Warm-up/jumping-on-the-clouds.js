const chai = require('chai');
var assert = chai.assert;

const jumpingOnClouds = require('../../Warm-up/jumping-on-the-clouds');

describe('Jumping on the Clouds', function() {
    it('should return 4', function() {
      assert.equal(jumpingOnClouds([0,0,1,0,0,1,0]), 4);
    });
    it('should return 3', function() {
      assert.equal(jumpingOnClouds([0,0,0,1,0,0]),3);
    });
  });