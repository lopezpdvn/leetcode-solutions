const log = console.log;

/**
 * @param {character[][]} grid
 * @return {number}
 */

const numIslands = grid => {
  if(!grid || !grid.length ||
      grid.some(row => !row || !row.length ||
                       row.some(col => !col)))
    return 0;

  const m = grid.length, n = grid[0].length;
  let nIsland = 0;
  if(!m || !n) return nIsland;

  for(let i = 0; i < m; i++) {
    for(let j = 0; j < n; j++) {
      if(grid[i][j] === '0') continue;

      nIsland++;

      for(const [iNB, jNB] of
                    visitAdjtLandCell(grid, i, j)) {
        grid[iNB][jNB] = '0';
      }
    }
  }

  return nIsland;
};

const visitAdjtLandCell = function* (grid, i, j) {
  yield [i, j];
  const queue = [[i, j]];

  while(queue.length) {
    [i, j] = queue.shift();
    const neighbors = [[i - 1, j], [i, j + 1],
                       [i + 1, j], [i, j - 1]];

    for(const [iNB, jNB] of neighbors) {
      if(!grid[iNB] || !grid[iNB][jNB] ||
                        grid[iNB][jNB] === '0') {
        continue;
      }
      yield [iNB, jNB];
      queue.push([iNB, jNB]);
    }
  }
};

//const test0 = 
//[["1","1","1","1","0"],["1","1","0","1","0"],["1","1","0","0","0"],["0","0","0","0","0"]];

const test0 = [undefined];

console.log(numIslands(test0));
