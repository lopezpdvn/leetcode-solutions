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
const isValidBST =
  (root, stack = [], lows = [], upps = []) => {

  updt([root, null, null], [stack, lows, upps]);

  while(stack.length) {
    root = stack.pop();
    const lower = lows.pop(), upper = upps.pop();
    
    if(!root) continue;
    const val = root.val;
    if(lower !== null && val   <= lower)
      return false;
    if(upper !== null && upper <= val  )
      return false;
    updt([root.right, val  , upper],
         [stack     , lows , upps ]);
    updt([root.left , lower, val  ],
         [stack     , lows , upps ]);
  }
  return true;
};

const updt = (vals, stacks) =>
  stacks.forEach((stck, i) => stck.push(vals[i]));

class TreeNode {
  constructor(x) {
    this.val = x;
    this.left = null;
    this.right = null;
  }
}

})();
