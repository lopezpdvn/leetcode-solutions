'use strict'; const log = console.log; (async ()=>{

/**
 * @param {string[]} strs
 * @return {string[][]}
 */
const groupAnagrams = strs => {
  const lookUp = new Map();

  strs.forEach(str => {

    const key =
      [...str].sort((a, b) => a.localeCompare(b))
              .join('');

    if(!lookUp.has(key))
      lookUp.set(key, []);
    lookUp.get(key).push(str);
  });

  return [...lookUp.values()];
};

const x = [];
x.push(["eat","tea","tan","ate","nat","bat"]);
x.forEach(e => log(groupAnagrams(e)));

})();
