/**
 * @param {number[]} nums
 * @return {boolean}
 */
//////////////////////////////////////////////////
const containsDuplicate = nums => {
  const numSet = new Set();
  for(const e of nums) {
    if(numSet.has(e))
      return true;
    numSet.add(e);
  }
  return false;
};
