/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

const twoSum = (nums, target) => {
  const num2Index = new Map();

  for(const [i, num] of nums.entries()) {
    const complement = target - num,
          index      = num2Index.get(complement);

    if(index !== undefined)
      return [index, i];

    num2Index.set(num, i);
  }
};
