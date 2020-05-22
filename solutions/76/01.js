'use strict'; const log = console.log; (async ()=>{

/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
const minWindow = (s, t, noAnswer = '') => {
  if(!s.length || !t.length)
    return noAnswer;

  const uniqChars = new Map();
  for(let i = 0; i < t.length; i++) {
    const count = uniqChars.get(t.charAt(i)) || 0;
    uniqChars.set(t.charAt(i), count + 1);
  }

  const required     = uniqChars.size,
        winCounts    = new Map(),
        sw        = {length: -1, l: 0, r: 0};
  let L = 0, R = 0, formed = 0;

  while(R < s.length) {
    let c = s.charAt(R);
    const count = winCounts.get(c) || 0;
    winCounts.set(c, count + 1);

    if(uniqChars.has(c) &&
       winCounts.get(c) === uniqChars.get(c))
      formed++;

    while(L <= R && formed === required) {
      c = s.charAt(L);
      // save smallest window until now
      if(sw.length === -1 || R - L + 1 < sw.length) {
        sw.length = R - L + 1;
        sw.l = L;
        sw.r = R;
      }

      winCounts.set(c, winCounts.get(c) - 1);
      if(uniqChars.has(c) &&
         winCounts.get(c) < uniqChars.get(c))
        formed--;

      L++;
    }
    R++;
  }

  return sw.length === -1 ?
         noAnswer      :
         s.slice(sw.l, sw.r + 1);
};

const tests = [
  [["ADOBECODEBANC", "ABC"], "BANC"],
  [["ADOBECODEBANC", "AB"], "BA"]
];

tests.forEach(test => {
  const result = minWindow(...test[0]);
  if(result === test[1])
    log('OK');
  else
    log(`ERROR: ${test}, ${result}`);
});

})();
