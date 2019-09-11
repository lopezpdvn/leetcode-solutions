'use strict'; const log = console.log; (async ()=>{

/*
 *  Definition for a binary tree node.
 *  function TreeNode(val) {
 *    this.val = val;
 *    this.left = this.right = null;
 *  }
 *
 *  @param {TreeNode} root
 *  @return {TreeNode}
 */
const invertTree = function f(root) {
  if(!root)
    return null;
  const right = f(root.right);
  const left = f(root.left);
  root.left = right;
  root.right = left;
  return root;
};

})();
