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
