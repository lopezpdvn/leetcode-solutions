import heapq

class Solution:
  def minMeetingRooms(self, intervals):

    if not intervals: return 0

    # The heap initialization
    free_rooms = []

    # Sort the meetings in increasing order of their start time.
    intervals.sort(key= lambda x: x[0])

    # Add the first meeting. We have to give a new room to the first meeting.
    heapq.heappush(free_rooms, intervals[0][1])

    # For all the remaining meeting rooms
    for i in intervals[1:]:

      # If the room due to free up the earliest is free, assign that room to this meeting.
      if free_rooms[0] <= i[0]:
        heapq.heappop(free_rooms)

      # If a new room is to be assigned, then also we add to the heap,
      # If an old room is allocated, then also we have to add to the heap with updated end time.
      heapq.heappush(free_rooms, i[1])

    # The size of the heap tells us the minimum rooms required for all the meetings.
    return len(free_rooms)

f = Solution().minMeetingRooms
assert f([(0, 30),(5, 10),(15, 20)]) == 2
assert f([(7,10),(2,4)]) == 1
assert f([(1, 10), (2, 7), (3, 19), (8, 12),
          (10, 20), (11, 30)]) == 4
print('OK!')
