'use strict'; const log = console.log; (async ()=>{

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
const reverseList = head => {
  let prev = null, curr = head;
  while(curr) {
    nextTmp = curr.next;
    curr.next = prev;
    prev = curr;
    curr = nextTmp;
  }
  return prev;
}

class ListNode {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

})();
