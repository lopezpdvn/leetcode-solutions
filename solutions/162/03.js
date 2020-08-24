/**
 * @param {number[]} nums
 * @return {number}
 */
const findPeakElement = nums => {
  let l = 0, r = nums.length - 1;
  while(l < r) {
    const mid = l + Math.trunc((r - l) / 2);
    if(nums[mid] > nums[mid + 1])
      r = mid;
    else
      l = mid + 1;
  }
  return l;
};

const log = console.log, f = findPeakElement,
  eq = require('assert').strictEqual;
eq(f([1,2,3,1]), 2);
eq(f([1,2,1,3,5,6,4]), 5);
eq(f([-5]), 0);
