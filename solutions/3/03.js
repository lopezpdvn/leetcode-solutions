'use strict'; const log = console.log; (async ()=>{

/**
 * @param {string} s
 * @return {number}
 */
const lengthOfLongestSubstring = s => {
  const n = s.length, map = new Map();
  let ans = 0;
  for(let j = 0, i = 0; j < n; j++) {
    const charAtJ = s.charAt(j);
    if(map.has(charAtJ))
      i = Math.max(map.get(charAtJ) + 1, i);
    ans = Math.max(ans, j - i + 1);
    map.set(charAtJ, j);
  }
  return ans;
};

const tests = [
  ['abcabcbb', 3],
  ['bbbbb', 1],
  ['pwwkew', 3],
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
