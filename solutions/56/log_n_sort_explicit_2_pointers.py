def merge(intervals):
  intervals.sort()
  prev = intervals[0]
  merged = [prev]
  for curr in intervals[1:]:

    # if the list of merged intervals is empty
    # or if the current interval does not
    # overlap with the previous, simply append it.
    if prev[1] < curr[0]:
      prev = curr
      merged.append(prev)
    else:
    # otherwise, there is overlap, so we merge
    # the current and previous intervals.
      prev[1] = max(prev[1], curr[1])

  return merged

f = merge
assert f([[1,3],[2,6],[8,10],[15,18]]) == [
                             [1,6],[8,10],[15,18]]
assert f([[1,4],[4,5]]) == [[1,5]]
assert f([[1,6],[4,5],[5,5]]) == [[1,6]]
