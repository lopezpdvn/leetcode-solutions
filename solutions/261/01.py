# Let G be a DG of n natural nums 0 to n - 1 & E
# a [(v, u)] define edges v-u. Is G a tree? Exs:

# 5 -> [(0,1), (0,2), (0,3), (1,4)]     -> True
# 5 -> [(0,1), (1,2), (2,3), (1,3), (1,4)]-> False

# f :: Int -> [(Int, Int)] -> Bool

from collections import deque

def f(n, edges):
  if len(edges) != n - 1: return False

  adj_list = [[] for _ in range(n)]
  for A, B in edges:
    adj_list[A].append(B)
    adj_list[B].append(A)

  parent = {0: -1}
  queue = deque([0])

  while queue:
    node = queue.popleft()
    for neighbour in adj_list[node]:
      if neighbour == parent[node]:
        continue
      if neighbour in parent:
        return False
      parent[neighbour] = node
      queue.append(neighbour)

  return len(parent) == n

tests = [
  [5, [[0,1], [0,2], [0,3], [1,4]], True],
  [5, [[0,1], [1,2], [2,3], [1,3], [1,4]], False]]

for n, edges, ans in tests:
  if f(n, edges) != ans:
    print(n, edges)

# Time complexity :
# Space complexity:

# graph
