'use strict'; const log = console.log; (async ()=>{

const zigzagLevelOrder = root => {
  if(!root) return [];
  const ans = [], nodeQ = [root, null];
  let isOrdrLeft = true, lvlL = [], node;

  while(nodeQ.length) {
    node = nodeQ.shift();
    if(node) {
      if(isOrdrLeft) lvlL.push   (node.val);
      else           lvlL.unshift(node.val);

      if(node.left)  nodeQ.push(node.left );
      if(node.right) nodeQ.push(node.right);
    }
    else {
      ans.push(lvlL);
      lvlL = [];
      if(nodeQ.length) nodeQ.push(null);
      isOrdrLeft = !isOrdrLeft;
    }
  }
  return ans;
};

})();
