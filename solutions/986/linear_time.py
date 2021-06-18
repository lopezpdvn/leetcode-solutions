def f(A, B):
  if A is None or B is None:
    raise Exception()

  from collections import deque
  C = deque()
  a = b = 0
  nA = len(A)
  nB = len(B)

  while a < nA and b < nB:
    c_min = max(A[a][0], B[b][0])
    c_max = min(A[a][1], B[b][1])
    if c_min <= c_max:
      C.append((c_min, c_max))

    if A[a][1] <= B[b][1]:
      a += 1
    else:
      b += 1

  return C


A = ((0,2),(5,10),(13,23),(24,25))
B = ((1,5),(8,12),(15,24),(25,26))
assert (*f(A, B),) == (
  (1,2), (5,5), (8,10), (15,23), (24,24), (25,25))

A = ((0,1),(4,5),( 8, 9),(12,13))
B = ((2,3),(6,7),(10,11),(14,15))
assert (*f(A, B),) == ()
