/**
 * @param {number[]} nums
 * @return {number}
 */
const firstMissingPositive = nums => {
  const n = nums.length;

  if(!nums.includes(1)) return 1;
  if(n === 1)           return 2;

  nums.forEach((e, i, A) => {
    if(e <= 0 || e > n)
      A[i] = 1;
  });

  nums.forEach((e, i, A) => {
    const a = Math.abs(e);
    if(a === n) A[0] = -Math.abs(A[0]);
    else        A[a] = -Math.abs(A[a]);
  });

  for(let i = 1; i < n; i++)
    if(nums[i] > 0)
      return i;

  if(nums[0] > 0) return n;

  return n + 1;
};
