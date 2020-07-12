'use strict'; const log = console.log; (async ()=>{

/**
 * Encodes a list of strings to a single string.
 *
 * @param {string[]} strs
 * @return {string}
 */
var encode = function(strs) {
    
};

/**
 * Decodes a single string to a list of strings.
 *
 * @param {string} s
 * @return {string[]}
 */
var decode = function(s) {
    
};

/**
 * Your functions will be called as such:
 * decode(encode(strs));
 */

const tests = [];

tests.forEach(test => {
  const result = minWindow(...test[0]);
  if(result === test[1])
    log('OK');
  else
    log(`ErrOr: ${test}, ${result}`);
});

})();
