'use strict'; const log = console.log; (async ()=>{

const f = (s, k) => {};

const testSetup = [[['eceba', 2], 3],
  [['aa', 1], 2], [['loveleetcode', 4], 7]];

for(const [args, answer] of testSetup) {
  if(f(...args) !== answer)
    throw new Error(args.join(', '));
}

log('OK!');

})();
