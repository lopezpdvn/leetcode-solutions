'use strict'; const log = console.log; (async ()=>{

/**
 * @param {number[]} nums
 * @return {number[]}
 */
const productExceptSelf = nums => {
  const multiplicative_identity = 1,
        n          = nums.length,
        L          = new Array(n).fill(Number()),
        R          = Array.from(L),
        answer     = Array.from(L);

  L[0] = multiplicative_identity;
  for(let i = 1; i < n; i++)
    L[i] = nums[i - 1] * L[i - 1];

  R[n - 1] = multiplicative_identity;
  for(let i = n - 2; i >= 0; i--)
    R[i] = nums[i + 1] * R[i + 1];

  return answer.map((e, i) => L[i] * R[i]);
};

log(productExceptSelf([1,2,3,4]));

})();
