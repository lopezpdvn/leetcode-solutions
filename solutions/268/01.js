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


})();
