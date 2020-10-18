/**
 * @param {number[]} nums
 * @return {number}
 */
const maxSubArray = nums => {
  let currSum = -Infinity, maxSum = currSum;

  nums.forEach(num => {
    currSum = Math.max(num, currSum + num);
    maxSum = Math.max(maxSum, currSum);
  });

  return maxSum;
};

const testSetup = [
  [[-2, 1, -3, 4, -1, 2, 1, -5, 4], 6],
  [[2], 2],
  [[-5, -5, 2], 2],
  [[2, -8, 3, -2, 4, -10], 5]
], eq = require('assert').strictEqual;

for(const [args, ans] of testSetup)
  eq(maxSubArray(args), ans);
