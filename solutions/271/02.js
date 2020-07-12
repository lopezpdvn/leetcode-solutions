'use strict'; const log = console.log; (async ()=>{

/**
 * Encodes a list of strings to a single string.
 *
 * @param {string[]} strs
 * @return {string}
 */
const encode = strs => {
  const sb = new Array() // string builder like
  for(const str of strs) {
    const x = uInt32ToStr(str.length);
    sb.push(x);
    sb.push(str);
  }
  return sb.join('');
};

/**
 * Decodes a single string to a list of strings.
 *
 * @param {string} s
 * @return {string[]}
 */
const decode = (s, nBytes = 4) => {
  let i = 0;
  const n = s.length, strs = new Array();

  while(i < n) {
    const currStrLen =
      strToUInt32(s.substring(i, i + nBytes));
    i += nBytes;
    strs.push(s.substring(i, i + currStrLen));
    i += currStrLen;
  }

  return strs;
};

const uInt32ToStr = (n, nBytes = 4) => {
  const bytes = new Array(nBytes);
  for(let i = nBytes - 1; i >= 0; i--) {
    const maskByteSelector = i * 8;
    const charCode = n >>> maskByteSelector;
    bytes[nBytes - i - 1] = charCode;
  }
  return String.fromCharCode(...bytes);
};

const strToUInt32 = s => {
  let uIntNum = 0;
  for(let i = 0; i < s.length; i++) {
    const charCode = s.charCodeAt(i);
    uIntNum = (uInt32ToStr << 8) | charCode;
  }
  return uIntNum;
};

/**
 * Your functions will be called as such:
 * decode(encode(strs));
 */

const tests = [
  ['Hello', 'World']
];

tests.forEach(test => {
  const result = decode(encode((test)));
  const isEq = test.every(
                      (e, i) => e === result[i]);
  if(isEq) log('OK');
  else     log(`Error: ${test}, ${result}`);
});

})();
