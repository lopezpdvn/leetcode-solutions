/* A non-empty str containing letters A-Z is
encoded to nums w/ A->1, B->2, ..., Z->26. Return
# of ways to decode it.

Ex1: '12'  -> 2 : 'AB' or 'L'
Ex2: '226' -> 3 : 'BZ', 'VF' or 'BBF'

numDecodings :: String -> Int                   */
const numDecodings = s => {
  if(!s) return 0;
  const n = s.length;
  return g(n, s, new Array(n + 1));
};

const g = function f(i, s, memo) {
  if(i < 0 || s[i] === '0') return 0;
  if(!i)                    return 1;

  if(!memo[i]) {
    memo[i] = f(i - 1, s, memo);
    if(parseInt(s.substring(i - 2, i)) <= 26)
      memo[i] += f(i - 2, s, memo);
  }

  return memo[i];
};
