/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
//////////////////////////////////////////////////
const isAnagram = (s, t) => {
  if(s.length !== t.length)
    return false;

  const indexOffset = 'a'.charCodeAt();
  const counter = new Array(26).fill(Number());

  for(let i = 0; i < s.length; i++) {
    counter[s.charCodeAt(i) - indexOffset]++;
    counter[t.charCodeAt(i) - indexOffset]--;
  }

  for(const count of counter)
    if(count)
      return false;

  return true;
};
