/**
 * @param {number[]} nums
 * @return {number}
 */
const f = A => {
  const L = new Map(), R = new Map(),
    mSet = new Map(),
    ADeg = {e: undefined, count: -Infinity};

  A.forEach((e, i) => {
    if(L.get(e) === undefined)
      L.set(e, i);
    R.set(e, i);

    eCount = (mSet.get(e) || 0) + 1;
    if(eCount > ADeg.count)  {
      ADeg.e = e;
      ADeg.count = eCount;
    }
    mSet.set(e, eCount);
  });

  let ans = A.length;

  mSet.forEach((count, e) => {
    if(ADeg.count !== count)
      return;
    ans = Math.min(ans, R.get(e) - L.get(e) + 1);
  });

  return ans;
};

const testSetup = [
  [[1, 2, 2, 3, 1], 2],
  [[1,2,2,3,1,4,2], 6]
], log = console.log;

for(const [args, ans] of testSetup) {
  if(f(args) !== ans)
    throw new Error(args);
}

log('OK!');
