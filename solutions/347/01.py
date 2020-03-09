from collections import Counter
from heapq import heappush, heappop

class Solution:
  def topKFrequent(self, nums, k):
    counter = Counter(nums)
    
    h = []
    for e, count in counter.items():
      heappush(h, (count, e))
      if len(h) > k:
        heappop(h)

    return reversed(
          [heappop(h)[1] for i in range(len(h))])
