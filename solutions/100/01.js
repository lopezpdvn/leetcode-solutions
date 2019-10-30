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
const isSameTree = (p, q) => {
  const queueP = [p], queueQ = [q];

  while(queueP.length) {
    const p = queueP.shift(), q = queueQ.shift();
    if(!check(p, q))
      return false;
    if(!p || !q)
      continue;
    if(p.left || q.left) {
      queueP.push(p.left);
      queueQ.push(q.left);
    }
    if(p.right || q.right) {
      queueP.push(p.right);
      queueQ.push(q.right);
    }
  }
  return true;
};

const check = (p, q) => {
  if(!p && !q) return true;
  if(!p || !q) return false;
  return p.val === q.val;
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
