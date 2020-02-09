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
const invertTree = (root, queue = []) => {
  if(!root) return null;

  queue.push(root);
  while(queue.length) {
    const x = queue.shift();
    const tmp = x.left;
    x.left = x.right;
    x.right = tmp;
    if(x.left) queue.push(x.left);
    if(x.right) queue.push(x.right);
  }

  return root;
};

class TreeNode {
  constructor(val) {
    this.val = val;
    this.left = this.right = null;
  }
}

})();
