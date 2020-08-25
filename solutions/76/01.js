'use strict'; const log = console.log; (async ()=>{

/* Get shortest substr of s that contains all
t chars, or empty str if not possible. O(n) time

Ex0: ADOBECODEBANC -> ABC  -> BANC
Ex1: ADOBECODEBANC -> AB   -> BA
Ex2: ABAACBAB      -> ABC  -> ACB
Ex3: ABAACBAB      -> ABAC -> BAAC
Ex4: AA            -> C    ->
Ex5: ACCABCCCCA    -> ABA  -> ACCAB             */
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
      this.add(e);
  }

  add(e) {
    let count = this.get(e) || 0;
    this.set(e, ++count);
    return count;
  }

  delete(e) {
    let count = this.get(e) || 0;
    if(count)
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
    if(this.get(e) ===
       this.targetMultiSet.get(e))
      this.formed++;
  }

  delete(e) {
    if(!this.has(e))
      return 0;
    const count = super.delete(e);
    this.L++;
    if(count === this.targetMultiSet.get(e) - 1)
      this.formed--;
    return count;
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
  [['ADOBECODEBANC', 'ABC' ], 'BANC' ],
  [['ADOBECODEBANC', 'AB'  ], 'BA'   ],
  [['ABAACBAB'     , 'ABC' ], 'ACB'  ],
  [['ABAACBAB'     , 'ABAC'], 'BAAC' ],
  [['AA'           , 'C'   ], ''     ],
  [['ACCABCCCCA'   , 'ABA' ], 'ACCAB']
];

tests.forEach(test => {
  const result = minWindow(...test[0]);
  if(result === test[1])
    log('OK');
  else
    log(`ErrOr: ${test}, ${result}`);
});

})();
