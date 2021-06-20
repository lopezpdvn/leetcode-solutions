from queue import PriorityQueue
from collections import Counter

def f(tsks, min_cooloff_t):
  mSet = Counter(tsks)
  asc_prioq = PriorityQueue()

  for mltplct in mSet.values():
    asc_prioq.put(-mltplct)

  time = 0
  while not asc_prioq.empty():
    cooloff_t = min_cooloff_t
    cooloff_tsks = []
    while cooloff_t >= 0 and (
          not asc_prioq.empty() or cooloff_tsks):
      if not asc_prioq.empty():
        mltplct = -asc_prioq.get() - 1

        if mltplct:
          cooloff_tsks.append(mltplct)

      time += 1
      cooloff_t -= 1

    for mltplct in cooloff_tsks:
      asc_prioq.put(-mltplct)

  return time

assert f('AAABBB', 2) == 8
assert f('AAABBB', 1) == 6
assert f('AAABBB', 0) == 6
assert f('AAAAAABCDEFG', 2) == 16
