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
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
const lowestCommonAncestor =
                          function f(root, p, q) {
  const rootVal = root.val,
        pVal    = p.val,
        qVal    = q.val;
  if(rootVal < pVal && rootVal < qVal)
    return f(root.right, p, q);
  else if(pVal < rootVal && qVal < rootVal)
    return f(root.left, p, q);
  else
    return root;
};

})();
