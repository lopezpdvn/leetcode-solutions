'use strict'; const log = console.log; (async ()=>{

/* f :: [Double] -> Double -> Int */
const g = (A, x) => f(A, 0, A.length - 1, x);

const f = function p(A, l, h, x) {
  if(l > h) return -1;

  const m = l + Math.trunc((h - l) / 2);
  if(A[m] === x) return m;

  if(A[l] < A[m])
    if(A[l] <= x && x < A[m])
      return p(A, l, m - 1, x);
    else
      return p(A, m + 1, h, x);
  else if(A[m] < A[h])
    if(A[m] < x && x <= A[h])
      return p(A, m + 1, h, x);
    else
      return p(A, l, m - 1, x);
  else {
      const y = p(A, l, m - 1, x);
      if(y === -1)
        return p(A, m + 1, h, x);
      else
        return y;
  }

  return -1;
};

const eq = require('assert').strictEqual;
eq(g([], 5), -1);
eq(g([-1, 0, 1, 2, 5, 7, -5, -3], -5), 6);
eq(g([-1, 0, 1, 2, 5, 7, -5, -3], -2), -1);
eq(g([2, 2, 2, 3, 4, 2], -5), -1);
eq(g([2, 2, 2, 3, 4, 2], 2), 2);
eq(g([2, 2, 2, 3, 4, 2], 3), 3);
eq(g([2, 2, 2, 3, 4, 2], 4), 4);

eq(g([3, 4, 2, 2, 2, 2], -5), -1);
eq(g([3, 4, 2, 2, 2, 2], 2), 2);
eq(g([3, 4, 2, 2, 2, 2], 4), 1);
eq(g([3, 4, 2, 2, 2, 2], 3), 0);
eq(g([3, 4, 1, 2, 2, 2], 3), 0);
eq(g([2, 4, 2, 2, 2, 2], 4), 1);

})();
