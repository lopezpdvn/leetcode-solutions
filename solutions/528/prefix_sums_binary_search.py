class Solution:
  def __init__(self, w: List[int]):
    from itertools import accumulate
    from operator import add
    self.prefix_sums = (*accumulate(w, add),)
    self.total_sum = self.prefix_sums[-1]

  def pickIndex(self) -> int:
    target = self.total_sum * random.random()
    # run a binary search to find the target zone
    low, high = 0, len(self.prefix_sums)
    while low < high:
      mid = low + (high - low) // 2
      if target > self.prefix_sums[mid]:
        low = mid + 1
      else:
        high = mid
    return low
