'use strict'; const log = console.log; (async ()=>{

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
const reverseList = function f(head) {
  if(!head || !head.next)
    return head;
  const p = f(head.next);

  // Make last non-null node of p point to head.
  head.next.next = head;

  // Now that head is the last non-null node of p
  // make it point to null
  head.next = null;

  return p;
};

class ListNode {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

})();
