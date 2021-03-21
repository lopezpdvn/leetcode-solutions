class Solution:
  def longestIncreasingPath(self, matrix):
    if not matrix: return 0
    m = len(matrix); n = len(matrix[0])
    cache = [[0 for j in range(n)]
             for i in range(m)]
    ans = 0
    for i in range(m):
      for j in range(n):
        ans = max(ans,
                  self.dfs(matrix, i , j, cache))
    return ans

  def dfs(self, matrix, i, j, cache):
    if cache[i][j]: return cache[i][j]
    longest_path_neighbor = cache[i][j] # 0

    for x, y in self.get_larger_neighbrs(
                                    matrix, i, j):
      longest_path_neighbor = max(
              longest_path_neighbor,
              self.dfs(matrix, x, y, cache))

    cache[i][j] = longest_path_neighbor + 1
    return cache[i][j]

  def get_larger_neighbrs(self, M, i, j):
    m = len(M); n = len(M[0])
    if j + 1 < n  and M[i][j] < M[i][j + 1]:
      yield (i, j + 1)
    if i + 1 < m  and M[i][j] < M[i + 1][j]:
      yield (i + 1, j)
    if j - 1 >= 0 and M[i][j] < M[i][j - 1]:
      yield (i, j - 1)
    if i - 1 >= 0 and M[i][j] < M[i - 1][j]:
      yield (i - 1, j)
