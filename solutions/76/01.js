'use strict'; const log = console.log; (async ()=>{

/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
const minWindow = (s, t, noAnswer = '') => {
  if(!s.length || !t.length) return noAnswer;

  const tCounter  = new Counter(t);
        swMinlen  = tCounter.size,
        swCounter = new Counter();
        sw        = {length: -1, l: 0, r: 0};
  let l = r = formed = Number();

  while(r < s.length) {
    let c = s[r];
    swCounter.put(c);

    if(tCounter.has(c) &&
       swCounter.get(c) === tCounter.get(c))
      formed++;

    while(l <= r && formed === swMinlen) {
      c = s.charAt(l);
      // save smallest window until now
      if(sw.length === -1 || r - l + 1 < sw.length) {
        sw.length = r - l + 1;
        sw.l = l;
        sw.r = r;
      }

      swCounter.set(c, swCounter.get(c) - 1);
      if(tCounter.has(c) &&
         swCounter.get(c) < tCounter.get(c))
        formed--;

      l++;
    }
    r++;
  }

  return sw.length === -1 ?
         noAnswer      :
         s.slice(sw.l, sw.r + 1);
};

class Counter extends Map {
  constructor(seq = []) {
    super();
    for(const e of seq)
      this.set(e, (this.get(e) || 0) + 1);
  }

  put(e) {
    this.set(e, (this.get(e) || 0) + 1);
  }
}

const tests = [
  [["ADOBECODEBANC", "ABC"], "BANC"],
  [["ADOBECODEBANC", "AB"], "BA"]
];

tests.forEach(test => {
  const result = minWindow(...test[0]);
  if(result === test[1])
    log('OK');
  else
    log(`ErrOr: ${test}, ${result}`);
});

})();
