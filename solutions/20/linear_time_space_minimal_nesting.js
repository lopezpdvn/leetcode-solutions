'use strict'; const log = console.log; (async ()=>{

const f = s => {
  if(typeof s !== 'string')
    throw new Error();

  const stack = [], pairs = new Map(
    [[')', '('], [']', '['], ['}', '{']]
  );

  for(const c of s) {
    if(!pairs.has(c)) {
      stack.push(c);
      continue;
    }

    const expectedPair = pairs.get(c),
      peekChar = stack.pop();
    if(expectedPair !== peekChar)
      return false;
  }

  return !stack.length;
};

const eq = require('assert').strictEqual;
eq(f('([)]'), false);
eq(f('{[]}'), true);
eq(f('()[]{}'), true);
eq(f('[[[['), false);

})();
