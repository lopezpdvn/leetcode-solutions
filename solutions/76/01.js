'use strict'; const log = console.log; (async ()=>{

/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
const minWindow = (s, t, noAnswer = '') => {
  if(!s.length || !t.length) return noAnswer;

  const tMultiSet  = new MultiSet(t),
        swMinlen  = tMultiSet.size,
        swMultiSet = new MultiSet(),
        sw        = {length: -1, l: 0, r: 0};
  let l = 0, r = 0, formed = 0;

  while(r < s.length) {
    let c = s[r];
    swMultiSet.put(c);

    if(tMultiSet.has(c) &&
       swMultiSet.get(c) === tMultiSet.get(c))
      formed++;

    while(l <= r && formed === swMinlen) {
      c = s.charAt(l);
      // save smallest window until now
      if(sw.length === -1 || r - l + 1 < sw.length) {
        sw.length = r - l + 1;
        sw.l = l;
        sw.r = r;
      }

      swMultiSet.set(c, swMultiSet.get(c) - 1);
      if(tMultiSet.has(c) &&
         swMultiSet.get(c) < tMultiSet.get(c))
        formed--;

      l++;
    }
    r++;
  }

  return sw.length === -1 ?
         noAnswer      :
         s.slice(sw.l, sw.r + 1);
};

class MultiSet extends Map {
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
  [['ADOBECODEBANC', 'ABC' ], 'BANC'],
  [['ADOBECODEBANC', 'AB'  ], 'BA'  ],
  [['ABAACBAB'     , 'ABC' ], 'ACB' ],
  [['ABAACBAB'     , 'ABAC'], 'BAAC']
];

tests.forEach(test => {
  const result = minWindow(...test[0]);
  if(result === test[1])
    log('OK');
  else
    log(`ErrOr: ${test}, ${result}`);
});

})();
