'use strict'; const log = console.log; (async ()=>{

const intervalIntersection = (A, B) => {
  const ans = [];
  let a = b = 0;

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

})();
