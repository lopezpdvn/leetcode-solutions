'use strict'; const log = console.log; (async ()=>{

const f = (A, B) => {
  const ans = [];
  let a = 0, b = 0;

  while(a < A.length && b < B.length) {
    const intrsctnL = Math.max(A[a][0], B[b][0]);
    const intrsctnH = Math.min(A[a][1], B[b][1]);

    if(intrsctnL <= intrsctnH)
      ans.push([intrsctnL, intrsctnH]);

    if(A[a][1] < B[b][1]) a++;
    else                  b++;
  }

  return ans;
};

const testSetup = [
  [[[[0,2],[5,10],[13,23],[24,25]],
    [[1,5],[8,12],[15,24],[25,26]]],
    [[1,2],[5,5],[8,10],[15,23],[24,24],[25,25]]]

], log = console.log,
  ok = require('assert').deepStrictEqual;

for(const [args, ans] of testSetup) {
  ok(f(...args), ans);
}

log('OK!');

})();
