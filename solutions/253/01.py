from queue import PriorityQueue

class Solution:

  def minMeetingRooms(self, intervals):
    if not intervals: return 0

    intervals.sort(key=lambda x: x[0]) # by start
    desc_prioq = PriorityQueue()
    prioq_index = 0

    desc_prioq.put((intervals[0][1], prioq_index))
    prioq_index += 1

    for start_time, end_time in intervals[1:]:
      earliest_free_end = desc_prioq.queue[0][0]
      if earliest_free_end <= start_time:
        desc_prioq.get()

      desc_prioq.put((end_time, prioq_index))
      prioq_index += 1

    return desc_prioq.qsize()

f = Solution().minMeetingRooms
assert f([(0, 30),(5, 10),(15, 20)]) == 2
assert f([(7,10),(2,4)]) == 1
assert f([(1, 10), (2, 7), (3, 19), (8, 12),
          (10, 20), (11, 30)]) == 4
assert f([]) == 0
assert f([(0, 5), (15, 20), (5, 10)]) == 1
print('OK!')
