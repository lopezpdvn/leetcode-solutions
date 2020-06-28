/* A non-empty str containing letters A-Z is
encoded to nums w/ A->1, B->2, ..., Z->26. Return
# of ways to decode it.

Ex1: '12'  -> 2 : 'AB' or 'L'
Ex2: '226' -> 3 : 'BZ', 'VF' or 'BBF'

numDecodings :: String -> Int                   */
const numDecodings = s => {
  if(!s || !s.length) return 0;
  return g(0, s, new Map());
};

const g = function f(i, s, memo) {
  if(i === s.length)     return 1;
  if(s[i] === '0')       return 0;
  if(i === s.length - 1) return 1;

  if(memo.has(i)) return memo.get(i);

  let ans = f(i + 1, s, memo);

  if(i < s.length - 1 &&
            parseInt(s.substring(i, i + 2)) <= 26)
    ans += f(i + 2, s, memo);

  memo.set(i, ans);

  return ans;
};
