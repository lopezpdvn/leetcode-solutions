/* A non-empty str containing letters A-Z is
encoded to nums w/ A->1, B->2, ..., Z->26. Return
# of ways to decode it.

Ex1: '12'  -> 2 : 'AB' or 'L'
Ex2: '226' -> 3 : 'BZ', 'VF' or 'BBF'

numDecodings :: String -> Int                   */
const numDecodings = s => {
  if(!s || !s.length) return 0;

  const dp = new Array(s.length + 1).fill(0);
  dp[0] = 1;
  dp[1] = s[0] === '0' ? 0 : 1;

  for(let i = 2; i < dp.length; i++) {
    if(s[i-1] !== '0')
      dp[i] += dp[i-1];

    const twoDig = parseInt(s.substring(i-2, i));
    if(twoDig >= 10 && twoDig <= 26)
      dp[i] += dp[i-2];
  };

  return dp[s.length];
};
