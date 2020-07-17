# time: O(mn * log k)
# space: O(mn)

from queue import PriorityQueue

class Solution:
  def kSmallestPairs(self, nums1: List[int],
    nums2: List[int], k: int) -> List[List[int]]:

    minHeap = PriorityQueue()
    i = 0

    for a in nums1:
      for b in nums2:
        minHeap.put((a + b, i, (a, b)))
        i += 1

    return [minHeap.get()[2] for i in range(k)
                             if minHeap.qsize()]

x = Solution()
f = x.f

print(f([1, 7, 11], [2, 4, 6], 3))
print(f([1, 1, 2], [1, 2, 3], 2))
print(f([1, 2], [3], 3))
