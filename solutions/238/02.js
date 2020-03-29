'use strict'; const log = console.log; (async ()=>{

/**
 * @param {number[]} nums
 * @return {number[]}
 */
const productExceptSelf = nums => {
  const multiplicative_identity = 1,
        n      = nums.length,
        answer =  new Array(n).fill(Number());

  answer[0] = multiplicative_identity;
  for(let i = 1; i < n; i++)
    answer[i] = nums[i - 1] * answer[i - 1];

  let R = multiplicative_identity;
  for(let i = n - 1; i >= 0; i--) {
    answer[i] *= R;
    R *= nums[i];
  }

  return answer;
};

log(productExceptSelf([1,2,3,4]));

})();
