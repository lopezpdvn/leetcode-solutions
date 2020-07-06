'use strict'; const log = console.log; (async ()=>{

/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
const minWindow = (s, t, noAnswer = '') => {
  if(!s.length || !t.length) return noAnswer;

  const minSW = new SlidingWindow(),
    sw = new MultiSetSlidingWindow(
                                 new MultiSet(t));

  for(const c of s) {
    sw.add(c);

    while(sw.containsTargetMultiSet) {
      if(!minSW.length || sw.length < minSW.length)
        [minSW.L, minSW.R] = [sw.L, sw.R];
      sw.delete(s[sw.L]);
    }
  }
  return !minSW.length ?
         noAnswer      :
         s.slice(minSW.L, minSW.R + 1);
};

class MultiSet extends Map {
  constructor(seq = []) {
    super();
    for(const e of seq)
      this.set(e, (this.get(e) || 0) + 1);
  }

  add(e) {
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
    this.L = 0;
    this.R = -1;
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

  add(e) {
    super.add(e);
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
  [['ABAACBAB'     , 'ABAC'], 'BAAC'],
  [['AA'     , 'C'], '']
];

tests.forEach(test => {
  const result = minWindow(...test[0]);
  if(result === test[1])
    log('OK');
  else
    log(`ErrOr: ${test}, ${result}`);
});

})();
