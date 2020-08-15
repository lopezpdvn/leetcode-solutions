'use strict'; const log = console.log; (async ()=>{

const f = (s, k) => {
  const sw = new SlidingWindowMultiSet();
  let maxLen = 0;

  for(const c of s) {
    sw.add(c);

    while(sw.size > k && sw.length)
      sw.delete(s[sw.L]);

    maxLen = Math.max(maxLen, sw.length);
  }

  return maxLen;
};

class SlidingWindowMultiSet extends Map {
  constructor() {
    super();
    this.L = 0;
    this.R = -1;
  }

  add(e) {
    this.R++;
    let count = this.get(e) || 0;
    this.set(e, ++count);
    return count;
  }

  delete(e) {
    this.L++;
    let count = this.get(e) || 0;
    if(count)
      this.set(e, --count);
    return count;
  }

  get length() {
    return this.R - this.L + 1;
  }
}

const testSetup = [
  [['eceba', 2], 3],
  [['aa', 1], 2],
  [['loveleetcode', 4], 7]
];

for(const [args, answer] of testSetup) {
  if(f(...args) !== answer)
    throw new Error(args.join(', '));
}

log('OK!');

})();
