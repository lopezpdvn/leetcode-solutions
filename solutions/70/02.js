'use strict'; const log = console.log; (async ()=>{

const climbStairs = n => g(n, new Array(n+1));

const g = function f(n, a) {
  if(n < 0) return 0;
  if(!n)    return 1;
  if(!a[n])
    a[n] = f(n-1, a) + f(n-2, a);
  return a[n];
};

})();
