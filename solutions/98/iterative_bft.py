from collections import deque

def f(p):
  if p is None:
    return True

  bftq = deque((p, None, None))

  while bftq:
    p, bMin, bMax = bftq.pop()

    if bMax is not None and p.val >= bMax:
      return False
    if bMin is not None and bMin >= p.val:
      return False

    if p.left is not None:
      bftq.appendleft((p.left, bMin, p.val))

    if p.right is not None:
      bftq.appendleft((p.right, p.val, bMax))

  return True
