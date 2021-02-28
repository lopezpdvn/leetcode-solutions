def merge(intervals):
  intervals.sort()
  merged = []

  for interval in intervals:

    # if the list of merged intervals is empty
    # or if the current interval does not
    # overlap with the previous, simply append it.
    if not merged or merged[-1][1] < interval[0]:
      merged.append(interval)
    else:
    # otherwise, there is overlap, so we merge
    # the current and previous intervals.
      merged[-1][1] = max(merged[-1][1],
                          interval[1])

  return merged

f = merge
assert f([[1,3],[2,6],[8,10],[15,18]]) == [
                             [1,6],[8,10],[15,18]]
assert f([[1,4],[4,5]]) == [[1,5]]
assert f([[1,6],[4,5],[5,5]]) == [[1,6]]
