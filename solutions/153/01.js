'use strict'; const log = console.log; (async ()=>{

/**
 * @param {number[]} nums
 * @return {number}
 */
const findMin = A => {
  if(A.length === 1)
    return A[0];

  let L = 0, R = A.length - 1;

  if(A[0] < A[R])
    return A[0];

  while(L <= R) {
    const mid = Math.trunc(L + (R - L) / 2);

    if(A[mid] < A[mid - 1])
      return A[mid];

    if(A[0] <= A[mid])
      L = mid + 1;
    else
      R = mid - 1;
  }

  return -1;
};

const tests = [
  [[3,4,5,1,2], 1],
  [[4,5,6,7,0,1,2], 0],
  [[2,1], 1]
]

tests.forEach(test => {
  const result = findMin(test[0]);
  if(result === test[1])
    log('OK');
  else
    log(`ERROR: ${test}, ${result}`);
});

})();
