'use strict'; const log = console.log; (async ()=>{

/**
 * @param {string} s
 * @return {number}
 */
const lengthOfLongestSubstring = s => {
  let ans = i = j = Number()
  const c2i = new Map();

  for(const c of s) {
    let k;
    if(undefined !== (k = c2i.get(c)))
      i = Math.max(k + 1, i);
    ans = Math.max(ans, j - i + 1);
    c2i.set(c, j++);
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
