const chai = require('chai');
var assert = chai.assert;

const createIntervals = require('../../Advanced/interval');

  let origin = [
      [0,4],
      [5,7],
      [8,9],
      [6,10],
      [15,18]
  ];

  let origin1 = [
    [1,3],
    [8,10],
    [0,9],
    [8,9],
    [15,18]
  ];

  let origin2 = [
    [1,3],
    [15,18],
    [8,10],
    [4,7],
    [11,16]
  ];

describe.only('Create interval', function() {
    it('should return [[0,4],[15,18],[5,10]]', function() {
      assert.deepEqual(createIntervals(origin), [[0,4],[15,18],[5,10]]);
    });

    it('should return [[15,18],[0,10]]', function() {
      assert.deepEqual(createIntervals(origin1), [[15,18],[0,10]]);
    });

    it('should return [ [ 1, 3 ], [ 8, 10 ], [ 4, 7 ], [ 11, 18 ] ]', function() {
        assert.deepEqual(createIntervals(origin2), [ [ 1, 3 ], [ 8, 10 ], [ 4, 7 ], [ 11, 18 ] ]);
      });
});