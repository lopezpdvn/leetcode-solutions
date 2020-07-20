'use strict'; const log = console.log; (async ()=>{

/* Let G be a DG of n natural nums 0 to n - 1 & E
a [(v, u)] define edges v-u. Is G a tree? Exs:

5 -> [(0,1), (0,2), (0,3), (1,4)]        -> True
5 -> [(0,1), (1,2), (2,3), (1,3), (1,4)] -> False

f :: Int -> [(Int, Int)] -> Bool                */

const f = (n, edges) => false;

const tests = [
  [5, [[0,1], [0,2], [0,3], [1,4]], true],
  [5, [[0,1], [1,2], [2,3], [1,3], [1,4]], false]]

for(const [n, edges, ans] of tests) {
  if(f(n, edges) !== ans)
    log(n, edges);
}

// Time complexity :
// Space complexity:

// graph

})();
