'use strict'; const log = console.log; (async ()=>{

const mergeKLists = lists => {
  const nodes = [];
  for(const l of lists) {
    let g = l;
    while(g) {
      nodes.push(g.val);
      g = g.next;
    }
  }
  nodes.sort((a, b) => a - b);
  const head  = new ListNode(0);
  let point = head;
  for(const x of nodes) {
    point.next = new ListNode(x);
    point = point.next;
  }
  return head.next;
};

class ListNode {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

})();
