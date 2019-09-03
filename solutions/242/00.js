/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
//////////////////////////////////////////////////
const isAnagram = (s, t) => {
  if(s.length !== t.length)
    return false;

  return new Set(
    [s, t].map(
      x => [...x].sort(String.localeCompare)
                 .join('')))
    .size === 1;

};
