/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

const twoSum = (nums, target) => {
  const n = nums.length;

  for(let i = 0; i < n; i++)
    for(let j = i + 1; j < n; j++)
      if(nums[j] === target - nums[i])
        return [i, j];

  throw new Error();
};
