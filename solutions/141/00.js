'use strict'; const log = console.log; (async ()=>{

/**
 * @param {ListNode} head
 * @return {boolean}
 */
const hasCycle = head => {
  const traversed = new Set();
  while(head) {
    if(traversed.has(head))
      return true
    traversed.add(head);
    head = head.next;
  }
  return false;
};

class ListNode {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

})();
