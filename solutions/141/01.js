'use strict'; const log = console.log; (async ()=>{

/**
 * @param {ListNode} head
 * @return {boolean}
 */
const hasCycle = head => {
  if(!head || !head.next)
    return false;
  let slow = head, fast = head.next;
  while(slow !== fast) {
    if(!fast || !fast.next)
      return false;
    slow = slow.next;
    fast = fast.next.next;
  }
  return true;
};

class ListNode {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

})();
