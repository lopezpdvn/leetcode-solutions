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
  switch(node.kind) {
    case BTNodeKind.LBndry: case BTNodeKind.Root:
      LBndry.push(node.val);    break;
    case BTNodeKind.RBndry:
      RBndry.unshift(node.val); break;
    case BTNodeKind.Leaf:
      leaves.push(node.val);    break;
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
      case BTNodeKind.Root: case BTNodeKind.RBndry:
        this.right.kind = BTNodeKind.RBndry;
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

let root = new BTNode(1,
  null,
  new BTNode(2,
    new BTNode(3),
    new BTNode(4)));

log(f(root));

root = new BTNode(1,
  new BTNode(2,
    new BTNode(4),
    new BTNode(5,
      new BTNode(7),
      new BTNode(8))),
  new BTNode(3,
    new BTNode(6,
      new BTNode(9),
      new BTNode(10)),
    null));

log(f(root));

})();
