'use strict'; const log = console.log; (async ()=>{

/**
 * Given a BST, write a function kthSmallest to
 * find the kth smallest element in it.
 * assume k is always valid:
 * 1 ≤ k ≤ BST's total elements.
 *
 * @param {TreeNode} root
 * @param {number} k
 * @return {number}
 */
const kthSmallest = (root, k) => {
  const node = elementAt(
    function* () { yield* IODFT(root, []) },
    k - 1);
  return node.val;
};

const IODFT = function* (root, stack = []) {
  while(stack.length || root) {
    if(root) {
      stack.push(root);
      root = root.left;
    }
    else {
      root = stack.pop();
      yield root;
      root = root.right;
    }
  }
}

const elementAt = (gen, k) => {
  if(k < 0) throw new Error('Index < 0');

  for(const e of gen())
    if(!k--)
      return e;

  throw new Error('Index >= length of sequence');
};

class TreeNode {
  constructor(val) {
    this.val = val;
    this.left = this.right = null;
  }
}

// Example 1:
// Input: root = [3,1,4,null,2], k = 1
//  3
// / \
// 1  4
// \
//  2
// Output: 1
//
// Example 2:
// Input: root = [5,3,6,2,4,null,null,1], k = 3
//    5
//   / \
//   3  6
//  / \
//  2  4
// /
// 1
// Output: 3

})();
