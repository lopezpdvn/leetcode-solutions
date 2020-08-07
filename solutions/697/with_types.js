const f = A => {
  const AmSet = new MultiSet(), SW = new Map();
  let ADeg = 1;

  for(const [index, elmnt] of A.entries()) {
    let sw = SW.get(elmnt);
    if(!sw) {
      sw = new SlidingWindow();
      sw.L = index;
      SW.set(elmnt, sw);
    }
    sw.R = index;
    ADeg = Math.max(ADeg, AmSet.add(elmnt));
  }

  let ans = A.length;
  for(const [elmnt, mltplct] of AmSet.entries()) {
    if(mltplct !== ADeg)
      continue;
    ans = Math.min(ans, SW.get(elmnt).length);
  }

  return ans; // {1, 2, ..., A.length}
};

class SlidingWindow {
  constructor() {
    this.L = 0;
    this.R = -1;
  }

  get length() {
    return this.R - this.L + 1;
  }
}

class MultiSet extends Map {
  add(e) {
    let mltplct = this.get(e) || 0;
    this.set(e, ++mltplct);
    return mltplct;
  }

  delete(e) {
    let mltplct = this.get(e) || 0;
    if(!mltplct)
      this.set(e, --mltplct);
    return mltplct;
  }
}

const testSetup = [
  [[1, 2, 2, 3, 1], 2],
  [[1,2,2,3,1,4,2], 6]
], log = console.log;

for(const [args, ans] of testSetup) {
  if(f(args) !== ans)
    throw new Error(args);
}

log('OK!');
