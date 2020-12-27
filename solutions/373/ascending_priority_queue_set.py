from queue import PriorityQueue
from itertools import product

def f(A, B, k):
  if k < 0:
    raise Exception()

  if not A or not B or not k:
    return

  asc_prioq = PriorityQueue()
  asc_prioq.put((A[0] + B[0], 0, 0))
  indices = {(0, 0)}
  nMax = min(k, len(A) * len(B))

  for i in range(nMax):
      a, b = asc_prioq.get()[1:]
      yield (A[a], B[b])

      if a+1 < len(A) and (a+1, b) not in indices:
          asc_prioq.put((A[a+1] + B[b], a+1, b))
          indices.add((a+1, b))

      if b+1 < len(B) and (a, b+1) not in indices:
          asc_prioq.put((A[a] + B[b+1], a, b+1))
          indices.add((a, b+1))

assert (*f([], [], 3),) == ()
assert (*f([1,7,11], [2,4,6], 3),) == (
                              (1,2), (1,4), (1,6))
assert (*f([1,1,2], [1,2,3], 2),) == (
                                     (1,1), (1,1))
assert (*f([1,2], [3], 3),) == ((1,3), (2,3))
assert (*f([1,3,11], [2,4,8], 4),) == (
                          (1,2),(1,4),(3,2),(3,4))
