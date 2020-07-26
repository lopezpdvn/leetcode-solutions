from queue import PriorityQueue

class Solution:
  def leastInterval(self, tasks, n):
    CHARSET_CARDINALITY = 26
    CHARSET_ZERO_OFFSET = ord('a')

    counter = [int()] * CHARSET_CARDINALITY

    for task in tasks:
      counter[ord(task) - CHARSET_ZERO_OFFSET] += 1

    max_heap = PriorityQueue()
    i = 0
    for multiplicity in counter:
      if not multiplicity:
        continue
      max_heap.put((-multiplicity, i))
      i += 1

    time = 0

    while not max_heap.empty():
      pass
