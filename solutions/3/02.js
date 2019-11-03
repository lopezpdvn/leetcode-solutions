'use strict'; const log = console.log; (async ()=>{

/**
 * @param {string} s
 * @return {number}
 */
const lengthOfLongestSubstring = s => {
  const n = s.length, set = new Set();
  let ans = 0, i = 0, j = 0;

  while(i < n && j < n) {
    if(!set.has(s.charAt(j))) {
      // extend sliding window range [i, j++)
      set.add(s.charAt(j++));
      ans = Math.max(ans, j - i);
    }
    else {
      set.delete(s.charAt(i++));
    }
  }

  return ans;
};

const tests = [
  ["abcabcbb", 3],
  ["bbbbb", 1],
  ["pwwkew", 3],
];

tests.forEach(test => {
  const result =
    lengthOfLongestSubstring(test[0]);
  if(result === test[1])
    log('OK');
  else
    log(`ERROR: ${test}, ${result}`);
});

})();
