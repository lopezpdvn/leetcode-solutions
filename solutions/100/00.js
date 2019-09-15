'use strict'; const log = console.log; (async ()=>{

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */
const isSameTree = function f(p, q) {
  if(!p && !q)
    return true;
  if(!p || !q)
    return false;
  if(p.val !== q.val)
    return false;
  return f(p.right, q.right) &&
         f(p.left , q.left);
};

const tests = [
  [[[1,2,3], [1,2,3]], true],
  [[[1,2,1], [1,1,2]], false],
];

tests.forEach(test => {
  const result = isSameTree(...test[0]);
  if(result === test[1])
    log('OK');
  else
    log(`ERROR: ${test}, ${result}`);
});

})();
