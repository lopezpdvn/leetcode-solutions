class PriorityQueue:
  def __init__(self):
    self.q = []

  def push(self, x):
    from heapq import heappush
    heappush(self.q, x)

  def pop(self):
    from heapq import heappop
    return heappop(self.q)

class Solution:
  def mergeKLists(self,
          lists: List[ListNode]) -> ListNode:
    # Dummy init node that points to the head of
    # result final singly-linked list
    headAns = ListNode(None);

    q = PriorityQueue()
    for l in lists:
      if l:
        q.push((l.val, l))

    node = headAns
    while not len(q):
      # highest priority node of k nodes
      valMinK, nodeMinK = q.pop()

      # Append to final list
      node.next = ListNode(valMinK)
      node = node.next

      if nodeMinK.next:
        q.push((nodeMinK.next.val, nodeMinK.next))

    return headAns.next
