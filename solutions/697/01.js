/**
 * @param {number[]} nums
 * @return {number}
 */
const findShortestSubArray = nums => {
  const left = new Map(), right = new Map(),
    mset = new Map();

  nums.forEach((e, i) => {
    if(left.get(e) === undefined)
      left.set(e, i);
    right.set(e, i);
    mset.set(e, (mset.get(e) || 0) + 1);
  });

  let ans = nums.length;
  const degree = Math.max(...mset.values());

  mset.forEach((count, e) => {
    if(count === degree)
      ans = Math.min(ans,
        right.get(e) - left.get(e) + 1);
  });

  return ans;
};
