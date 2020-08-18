'use strict'; const log = console.log; (async ()=>{

const f = node => {
  const LBndry = [], RBndry = [], leavs = [];
  PODFT(node, LBndry, RBndry, leavs,
    BTNodeKind.Root);
  return LBndry.concat(leavs, RBndry);
};

const PODFT = function f(
         node, LBndry, RBndry, leavs, nodeKind) {
  if(!node) return;
  switch(nodeKind) {
    case BTNodeKind.LBndry: case BTNodeKind.Root:
      LBndry.push(node.val);    break;
    case BTNodeKind.RBndry:
      RBndry.unshift(node.val); break;
    case BTNodeKind.Leaf:
      leavs.push(node.val);     break;
  }
  const LChildKind = _LChildKind(node, nodeKind),
        RChildKind = _RChildKind(node, nodeKind);
  f(node.left, LBndry, RBndry, leavs, LChildKind);
  f(node.right,LBndry, RBndry, leavs, RChildKind);
};

const BTNodeKind = {
  Root: 0, LBndry: 1, RBndry: 2, Leaf: 3, Other: 4
};

const _LChildKind = (node, nodeKind) => {
  if(!node.left) return;
  switch(nodeKind) {
    case BTNodeKind.Root:
    case BTNodeKind.LBndry:
      return BTNodeKind.LBndry;
    case BTNodeKind.RBndry:
      if(!node.right)
        return BTNodeKind.RBndry;
    default:
      return !node.left.left && !node.left.right
               ? BTNodeKind.Leaf
               : BTNodeKind.Other;
  }
};

const _RChildKind = (node, nodeKind) => {
  if(!node.right) return;
  switch(nodeKind) {
    case BTNodeKind.Root: case BTNodeKind.RBndry:
      return BTNodeKind.RBndry;
    case BTNodeKind.LBndry:
      if(!node.left)
        return BTNodeKind.LBndry;
    default:
      return !node.right.left && !node.right.right
               ? BTNodeKind.Leaf
               : BTNodeKind.Other;
  }
}

class BTNode {
  constructor(val, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
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
