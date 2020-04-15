/**
 * @param {number[][]} grid
 * @return {number}
 */
const orangesRotting = grid => {
  const m = grid.length, n = grid[0].length,
        queue = [];

  for(let i = 0; i < m; i++)
    for(let j = 0; j < n; j++)
      if(grid[i][j] === 2)
        queue.push([i, j, 0]);

  let d = 0, i, j;
  while(queue.length) {
    [i, j, d] = queue.shift();
    
    for(const [r, c] of getNeighbors(m, n, i, j))
      if(grid[r][c] === 1) {
        grid[r][c] = 2;
        queue.push([r, c, d + 1]);
      }
  }

  for(const row of grid)
    for(const cell of row)
      if(cell === 1)
        return -1;

  return d;
};

const getNeighbors = function* (m, n, i, j) {
  const neighbors = [[i-1, j], [i, j-1],
                     [i+1, j], [i, j+1]];
  for(const [r, c] of neighbors)
    if(0 <= r && r < m && 0 <= c && c < n)
      yield [r, c];
};
