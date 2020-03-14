from queue import PriorityQueue

# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, x):
#         self.val = x
#         self.next = None

class Node:
  def __init__(self, node):
    self.node = node
  def __lt__(self, other):
    return self.node.val < other.node.val

class Solution:
  def mergeKLists(self,
          lists: List[ListNode]) -> ListNode:
    # Dummy init node that points to the head of
    # result final singly-linked list
    headAns = ListNode(None);

    q = PriorityQueue()
    for l in lists:
      if l:
        q.put(Node(l))

    node = headAns
    while not q.empty():
      # highest priority node of k nodes
      nodeMinK = q.get().node

      # Append to final list
      node.next = ListNode(nodeMinK.val)
      node = node.next

      if nodeMinK.next:
        q.put(Node(nodeMinK))

    return headAns.next
