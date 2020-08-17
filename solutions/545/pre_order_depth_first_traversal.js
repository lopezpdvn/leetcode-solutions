'use strict'; const log = console.log; (async ()=>{

// Binary Tree

class BTNode {
  constructor(val, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }

  *[Symbol.iterator]() {
    if(this.left)  yield this.left;
    if(this.right) yield this.right;
  }
}

const root = new BTNode(2,
  new BTNode(1), new BTNode(3));

for(const i of root)
  log(i.val);

})();
