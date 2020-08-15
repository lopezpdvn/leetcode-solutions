from queue import PriorityQueue
from itertools import product

def f(A, B, k):
  if A is None or B is None or k < 0:
    raise Exception()

  asc_prioq = PriorityQueue()
  for a, b in product(A, B):
    asc_prioq.put((-a - b, (a, b)))

    if asc_prioq.qsize() > k:
      asc_prioq.get()

  return tuple(reversed(
      [asc_prioq.get()[1] for i in range(k)
                       if not asc_prioq.empty()]))

assert f([1,7,11], [2,4,6], 3) == ((1,2), (1,4), (1,6))
assert f([1,1,2], [1,2,3], 2) == ((1,1), (1,1))
assert f([1,2], [3], 3) == ((1,3), (2,3))
