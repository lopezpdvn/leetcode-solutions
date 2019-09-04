'use strict'; const log = console.log; (async ()=>{

/**
 * @param {string} s
 * @return {boolean}
 */
const isValid = s => {
  const stack        = [],
        bracketPairs = new Map([
          [')', '('], ['}', '{'], [']', '[']
        ]);

  for(let i = 0; i < s.length; i++) {
    const c = s.charAt(i);

    if(bracketPairs.has(c)) {
      // c is a closing bracket
      const topChar = stack.pop();
      if(topChar !== bracketPairs.get(c))
        return false;
    }
    else {
      stack.push(c);
    }
  }

  return stack.length === 0;
};

log(isValid('()'));
log(isValid('()[]{}'));
log(isValid('(]'));
log(isValid('([)]'));

})();
