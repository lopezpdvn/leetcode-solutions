/* A non-empty str containing letters A-Z is
encoded to nums w/ A->1, B->2, ..., Z->26. Return
# of ways to decode it.

Ex1: '12'  -> 2 : 'AB' or 'L'
Ex2: '226' -> 3 : 'BZ', 'VF' or 'BBF'

numDecodings :: String -> Int                   */
const numDecodings = s => {
  if(!s || !s.length) return 0;
  return g(0, s, new Array(s.length + 1));
};

const g = function f(i, s, memo) {
  if(i === s.length)     return 1;
  if(s[i] === '0')       return 0;
  if(i === s.length - 1) return 1;

  if(memo[i]) return memo[i];

  let ans = f(i + 1, s, memo);

  if(parseInt(s.substring(i, i + 2)) <= 26)
    ans += f(i + 2, s, memo);

  memo[i] = ans;

  return memo[i];
};
