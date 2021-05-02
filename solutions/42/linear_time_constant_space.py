def f(height):
  n = len(height)

  # index of last max element
  max_ix = max(range(n - 1, -1, -1),
               key=lambda e: height[e])

  water = 0
  lmax = 0
  for i in range(max_ix):
    if height[i] > lmax:
      lmax = height[i]
      continue
    water += lmax - height[i]

  rmax = 0
  for i in range(n - 1, max_ix, -1):
    if height[i] > rmax:
      rmax = height[i]
      continue
    water += rmax - height[i]

  return water

assert f((0,1,0,2,1,0,1,3,2,1,2,1)) == 6
assert f((4,2,0,3,2,5)) == 9
