/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

const twoSum = (nums, target) => {
  const num2Index = new Map();
  for(const [i, num] of nums.entries()) {
    const complement = target - num;
    if(num2Index.has(complement))
      return [num2Index.get(complement), i];
    num2Index.set(num, i);
  }
};
