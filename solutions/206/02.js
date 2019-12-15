'use strict'; const log = console.log; (async ()=>{

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
const reverseList = function f(head) {
  if(!head || !head.next)
    return head;
  const p = f(head.next);
  head.next.next = head;
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
