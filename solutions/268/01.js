'use strict'; const log = console.log; (async ()=>{

/**
 * @param {number[]} nums
 * @return {number}
 */
const missingNumber = nums => {
  const n = nums.length;
  nums.sort((a, b) => a - b);

  if(nums[n-1] !== n) return n;
  if(nums[0])         return 0;

  for(let i = 1; i < n; i++) {
    const expected = nums[i-1] + 1;
    if(nums[i] !== expected)
      return expected;
  }
};

const log = console.log, f = missingNumber,
  eq = require('assert').strictEqual;

eq(f([]), 0);
eq(f([0]), 1);
eq(f([1]), 0);
eq(f([3,0,1]), 2);
eq(f([9,6,4,2,3,5,7,0,1]), 8);

})();
