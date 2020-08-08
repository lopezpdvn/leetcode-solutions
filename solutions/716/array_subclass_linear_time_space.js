class MaxStack extends Array {
  push(e) {
    const maxE = Math.max(e,
      this.length ? this[this.length - 1][1] : e);
    super.push([e, maxE]);
  }

  get top() {
    return this[this.length - 1][0];
  }

  pop() {
    return super.pop()[0];
  }

  get peekMax() {
    return this[this.length - 1][1];
  }

  popMax() {
    const maxE = this.top;
    let maxEIndex = this.length - 1;
    while(this[maxEIndex][0] !== maxE)
      maxEIndex--;
    this.splice(maxEIndex, 1);
    return maxE;
  }
}

const ok = require('assert').ok;
const x = new MaxStack();
ok(x.push(5)   === undefined);
ok(x.push(1)   === undefined);
ok(x.push(5)   === undefined);
ok(x.top     === 5);
ok(x.popMax()  === 5);
ok(x.top     === 1);
ok(x.peekMax === 5);
ok(x.pop()     === 1);
ok(x.top     === 5);
