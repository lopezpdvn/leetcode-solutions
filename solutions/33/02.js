'use strict'; const log = console.log; (async ()=>{

/* f :: [Double] -> Double -> Int */
const search = (nums, target) => {
  let l = 0, h = nums.length - 1;

  while(l <= h) {
    const m = l + Math.trunc((h - l) / 2);
    if(nums[m] === target)
      return m;

    if(nums[l] <= nums[m])
      if(nums[l] <= target && target < nums[m])
        h = m - 1;
      else
        l = m + 1;
    else
      if(nums[m] < target && target <= nums[h])
        l = m + 1;
      else
        h = m - 1;
  };

  return -1;
};

const eq = require('assert').strictEqual;
eq(f([], 5), -1);
eq(f([-1, 0, 1, 2, 5, 7, -5, -3], -5), 6);
eq(f([-1, 0, 1, 2, 5, 7, -5, -3], -2), -1);

})();
