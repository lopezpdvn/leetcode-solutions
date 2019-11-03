'use strict'; const log = console.log; (async ()=>{

/**
 * @param {string} s
 * @return {number}
 */
const lengthOfLongestSubstring = s => {
  const n = s.length;
  let ans = 0;

  for(let i = 0; i < n; i++) {
    for(let j = i + 1; j <= n; j++) {
      if(allUnique(s, i, j))
        ans = Math.max(ans, j - i);
    }
  }

  return ans;
};

const allUnique = (s, start, end) => {
  const set = new Set();
  for(let i = start; i < end; i++) {
    const c = s.charAt(i);
    if(set.has(c)) return false;
    set.add(c);
  }
  return true;
}

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
