'use strict'; const log = console.log; (async ()=>{

/* f :: [Double] -> Double -> Int */
const f = (A, target) => {
  let l = 0, h = A.length - 1;

  while(l <= h) {
    const m = l + Math.trunc((h - l) / 2);
    if(A[m] === target)
      return m;

    if(A[l] <= A[m])
      if(A[l] <= target && target < A[m])
        h = m - 1;
      else
        l = m + 1;
    else
      if(A[m] < target && target <= A[h])
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
eq(f([2, 2, 2, 3, 4, 2], -5), -1);
eq(f([2, 2, 2, 3, 4, 2], 2), 2);
eq(f([2, 2, 2, 3, 4, 2], 3), 3);
eq(f([2, 2, 2, 3, 4, 2], 4), 4);

eq(f([3, 4, 2, 2, 2, 2], -5), -1);
eq(f([3, 4, 2, 2, 2, 2], 2), 2);
eq(f([3, 4, 1, 2, 2, 2], 3), 0);
eq(f([2, 4, 2, 2, 2, 2], 4), 1);

})();
