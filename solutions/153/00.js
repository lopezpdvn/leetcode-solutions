'use strict'; const log = console.log; (async ()=>{

/**
 * @param {number[]} nums
 * @return {number}
 */
const findMin = nums => {
  return Math.min.apply(null, nums);
};

const tests = [
  [[3,4,5,1,2], 1],
  [[4,5,6,7,0,1,2], 0]
]

tests.forEach(test => {
  if(findMin(test[0]) === test[1])
    log('OK');
  else
    log(`ERROR: ${test}`);
});

})();
