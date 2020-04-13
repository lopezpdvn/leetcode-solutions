/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
const uniquePaths = (m, n) => {
  const d = new Array(m).fill(undefined);
  d.forEach(
    (_, i, A) => A[i] = new Array(n).fill(1));

  for(let i = 1; i < m; i++)
    for(let j = 1; j < n; j++)
      d[i][j] = d[i - 1][j] + d[i][j - 1];

  return d[m - 1][n - 1];
};
