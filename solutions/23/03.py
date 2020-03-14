from queue import PriorityQueue

# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, x):
#         self.val = x
#         self.next = None

class Solution:
  def mergeKLists(self,
          lists: List[ListNode]) -> ListNode:
    # Dummy init node that points to the head of
    # result final singly-linked list
    headAns = ListNode(None);
    i = 0

    q = PriorityQueue()
    for l in lists:
      if l:
        q.put((l.val, i, l))
        i += 1

    node = headAns
    while not q.empty():
      # highest priority node of k nodes
      valMinK, iMinK, nodeMinK = q.get()

      # Append to final list
      node.next = ListNode(valMinK)
      node = node.next

      if nodeMinK.next:
        q.put(
          (nodeMinK.next.val, i, nodeMinK.next))
        i += 1

    return headAns.next
