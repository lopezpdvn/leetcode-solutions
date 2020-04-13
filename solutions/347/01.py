from collections import Counter
from queue import PriorityQueue

class Solution:
  def topKFrequent(self, nums, k):
    mset = Counter(nums)
    h = PriorityQueue()
    i = 0

    for e, count in mset.items():
      h.put((count, i, e))
      i += 1

      if h.qsize() > k: h.get()

    return reversed(
            [h.get()[2] for i in range(k)])
