'use strict'; const log = console.log; (async ()=>{

const f = node => {
  const LBndry = [], RBndry = [], leaves = [];
  node.kind = BTNodeKind.Root;
  PODFT(node, LBndry, RBndry, leaves);
  return LBndry.concat(leaves, RBndry);
};

const PODFT = function f(
                   node, LBndry, RBndry, leaves) {
  if(!node) return;
  switch node.kind {
    case BTNodeKind.LBndry: case BTNodeKind.Root:
      LBndry.push(node);    break;
    case BTNodeKind.RBndry:
      RBndry.unshift(node); break;
    case BTNodeKind.Leaf:
      leaves.push(node);    break;
  }
  node.tagChildren();
  f(node.left , LBndry, RBndry, leaves);
  f(node.right, LBndry, RBndry, leaves);
};

const BTNodeKind = {
  Root: 0, LBndry: 1, RBndry: 2, Leaf: 3, Other: 4
};

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

  tagChildren()  {
    this.tagLeftChild(); this.tagRightChild();
  }

  tagLeftChild() {
    if(!this.left) return;
    switch(this.kind) {
      case BTNodeKind.Root:
      case BTNodeKind.LBndry:
        this.left.kind = BTNodeKind.LBndry;
        break;
      case BTNodeKind.RBndry:
        if(!this.right) {
          this.left.kind = BTNodeKind.RBndry;
          break;
        }
      default:
        this.left.kind =
          !this.left.left && !this.left.right
            ? BTNodeKind.Leaf
            : BTNodeKind.Other;
    }
  }

  tagRightChild() {
    if(!this.right) return;
    switch(this.kind) {
      case BTNodeKind.Root: case BTNodeKind.BBndry:
        this.right.kind = BTNodeKind.BBndry;
        break;
      case BTNodeKind.LBndry:
        if(!this.left) {
          this.right.kind = BTNodeKind.LBndry;
          break;
        }
      default:
        this.right.kind =
          !this.right.left && !this.right.right
            ? BTNodeKind.Leaf
            : BTNodeKind.Other;
    }
  }
}

const root = new BTNode(2,
  new BTNode(1), new BTNode(3));

for(const i of root)
  log(i.val);

})();
