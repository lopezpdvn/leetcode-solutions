'use strict'; const log = console.log; (async ()=>{

const f = s => {
  let maxSortedSetLen = 0;
  const sw = new SlidingWindowSortedSet();

  for(const c of s) {
    sw.add(c);
    while(!sw.isSortedSetLen && sw.length)
      sw.delete(s[sw.L]);
    maxSortedSetLen =
      Math.max(maxSortedSetLen, sw.length);
  }

  return maxSortedSetLen;
};

class SlidingWindowSortedSet extends Map {
  constructor() {
    super();
    this.L = 0;
    this.R = -1;
    this.count = 0;
  }

  get length() {
    return this.R - this.L + 1;
  }

  add(c) {
    let count = this.get(c) || 0;
    this.set(c, ++count);
    this.count++;
    this.R++;
    return count;
  }

  delete(c) {
    let count = this.get(c) || 0;
    if(count) {
      this.L++;
      this.set(c, --count);
      this.count--;
      if(!count)
        super.delete(c);
    }
    return count;
  }

  get isSortedSetLen() {
    return this.count === this.size;
  }
}

const eq = require('assert').strictEqual;
eq(f('abcabcbb'), 3);
eq(f('bbbbb'), 1);
eq(f('pwwkew'), 3);

})();
