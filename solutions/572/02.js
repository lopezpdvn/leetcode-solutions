'use strict'; const log = console.log; (async ()=>{

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} s
 * @param {TreeNode} t
 * @return {boolean}
 */
const isSubtree = (s, t) =>
  s !== null && (equals(s, t)          ||
                 isSubtree(s.left , t) ||
                 isSubtree(s.right, t));

const equals = (x, y) => {
  if(!x && !y) return true;
  if(!x || !y) return false;
  return x.val === y.val          &&
         equals(x.left , y.left ) &&
         equals(x.right, y.right);
};

})();
