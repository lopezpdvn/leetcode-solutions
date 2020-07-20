# Let G be a DG of n natural nums 0 to n - 1 & E
# a [(v, u)] define edges v-u. Is G a tree? Exs:

# 5 -> [(0,1), (0,2), (0,3), (1,4)]       -> True
# 5 -> [(0,1), (1,2), (2,3), (1,3), (1,4)]-> False

# f :: Int -> [(Int, Int)] -> Bool

def f(n, edges):
  return False

tests = [
  [5, [[0,1], [0,2], [0,3], [1,4]], True],
  [5, [[0,1], [1,2], [2,3], [1,3], [1,4]], False]]

for n, edges, ans in tests:
  if f(n, edges) != ans:
    print(n, edges)

# Time complexity :
# Space complexity:

# graph
