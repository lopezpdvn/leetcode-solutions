'use strict'; const log = console.log; (async ()=>{

/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
const minWindow = (s, t, noAnswer = '') => {
  if(!s.length || !t.length) return noAnswer;

  const tMultiSet  = new MultiSet(t),
        sw = new MultiSetSlidingWindow(tMultiSet),
        minSW        = new SlidingWindow();
  let l = 0, r = 0, formed = 0;

  for(const c of s) {
    sw.put(c);

    while(sw.length >= 0 && sw.containsTargetMultiSet) {
      const k = s.charAt(l);

      // save smallest window until now
      if(isNaN(minSW.length) || r - l + 1 < minSW.length) {
        minSW.L = sw.L;
        minSW.R = sw.R;
      }

      sw.delete(k);
      l++;
    }
    r++;
  }

  return isNaN(minSW.length) ?
         noAnswer      :
         s.slice(minSW.L, minSW.R + 1);
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

  delete(e) {
    let count = this.get(e);
    if(count !== undefined)
      this.set(e, --count);
    return count;
  }
}

class SlidingWindow {
  constructor() {
    this.L = undefined;
    this.R = undefined;
  }

  get length() {
    return this.R - this.L + 1;
  }
};

class MultiSetSlidingWindow extends MultiSet {
  constructor(targetMultiSet) {
    super();
    this.targetMultiSet = targetMultiSet;
    this.L = 0;
    this.R = -1;
    this.formed = 0;
  }

  put(e) {
    super.put(e);
    this.R++;
    if(this.targetMultiSet.has(e) &&
       this.get(e) === this.targetMultiSet.get(e)) {
      this.formed++;
    }
  }

  delete(e) {
    super.delete(e);
    this.L++;
    if(this.targetMultiSet.has(e) &&
       this.get(e) < this.targetMultiSet.get(e))
      this.formed--;
  }

  get containsTargetMultiSet() {
    return this.targetMultiSet.size ===
           this.formed;
  }

  get length() {
    return this.R - this.L + 1;
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
