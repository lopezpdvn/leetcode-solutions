'use strict'; const log = console.log; (async ()=>{

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
const isValidBST = root => {
  return _isValidBST(root, null, null);
};

const _isValidBST = function f(root, min, max) {
  if(!root                     ) return true;
  const val = root.val;
  if(min !== null && val <= min) return false;
  if(max !== null && max <= val) return false;
  if(!f(root.left , min, val)  ) return false;
  if(!f(root.right, val, max)  ) return false;
  return true;
};

class TreeNode {
  constructor(x) {
    this.val = x;
    this.left = null;
    this.right = null;
  }
}

})();
