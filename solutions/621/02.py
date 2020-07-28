from queue import PriorityQueue
from collections import Counter

class Solution:
  def leastInterval(self, tasks, n):
    mSet = Counter(tasks)
    max_heap = PriorityQueue()
    max_heap_index = 0

    for multiplicity in mSet.values():
      max_heap.put((-multiplicity, max_heap_index))
      max_heap_index += 1

    time = 0
    while not max_heap.empty():
      cooling_period = 0
      tsks_pend = []
      while cooling_period <= n:
        if not max_heap.empty():
          multiplicity = -max_heap.get()[0] - 1
          if multiplicity:
            tsks_pend.append(multiplicity)

        cooling_period += 1
        time += 1

        if max_heap.empty() and not len(tsks_pend):
          break

      for tsk_remain in tsks_pend:
        max_heap.put((-tsk_remain, max_heap_index))
        max_heap_index += 1

    return time

# print(f('AAABBB', 2))
# print(f('AAABBB', 0))
# print(f('AAAAAABCDEFG', 2))
