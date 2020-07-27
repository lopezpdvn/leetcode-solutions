from queue import PriorityQueue

class Solution:
  def leastInterval(self, tasks, n):
    CHARSET_CARDINALITY = 26
    CHARSET_ZERO_OFFSET = ord('A')

    counter = [int()] * CHARSET_CARDINALITY
    for task in tasks:
      counter[ord(task) - CHARSET_ZERO_OFFSET] += 1

    max_heap = PriorityQueue()
    max_heap_index = 0
    for multiplicity in counter:
      if not multiplicity:
        continue
      max_heap.put((-multiplicity, max_heap_index))
      max_heap_index += 1

    time = 0
    while not max_heap.empty():
      j = 0
      tmp = []

      while j <= n:
        if not max_heap.empty():
          if -max_heap.queue[0][0] > 1:
            tmp.append(-max_heap.get()[0] - 1)
          else:
            max_heap.get()

        time += 1
        if max_heap.empty() and not len(tmp):
          break
        j += 1

      # Restore max heap
      for e_tmp in tmp:
        max_heap.put((-e_tmp, max_heap_index))
        max_heap_index += 1

    return time


f = Solution()
print(f.leastInterval(['A','A','A','B','B','B'], 2))
print(f.leastInterval(['A','B'], 2))
