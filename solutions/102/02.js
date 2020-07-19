'use strict'; const log = console.log; (async ()=>{

/* Get [[a]] of BFT of BT left to right, where a
   is typeof BTNode.val. Example:

    3
   / \
  9  20
    /  \
   15   7      ->   [[3], [9,20], [15,7]]       */

const levelOrder = root => {
  const levels = [];
  if(!root) return levels;

  let level = 0;
  const queue = [root];

  while(queue.length) {
    levels.push([]);
    const levelLen = queue.length;

    for(let i = 0; i < levelLen; i++) {
      const node = queue.shift();
      levels[level].push(node.val);
      if(node.left)
        queue.push(node.left);
      if(node.right)
        queue.push(node.right);
    }

    level++;
  }

  return levels;
};

// Time complexity : O(n)
// Space complexity: O(n)

// breadth first traversal, binary tree,
// level traversal

})();
