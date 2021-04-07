from pprint import pprint

def prints(A):
    for a in A:
        print(a)

def printnxt(S, nxt):
    for s, _nxt in zip(S, nxt):
        print(s, _nxt)

class Solution:
  def minWindow(self, S, T):
    N = len(S)
    nxt = [None] * N
    last = [-1] * 26 # cardinality char set
    for i in range(N-1, -1, -1):
      last[ord(S[i]) - ord('a')] = i
      nxt[i] = tuple(last)

    printnxt(S, nxt)
  
    # candidate SWs len 1, T[0] 1st char
    sws = [[i, i] for i, c in enumerate(S)
           if c == T[0]]
  
    for t in T[1:]:
      t_ix = ord(t) - ord('a')
  
      sws = [[root, nxt[i+1][t_ix]]
             for root, i in sws
             if 0 <= i < N-1 and nxt[i+1][t_ix] >=0]
  
    if not sws: return ''
    i, j = min(sws, key = lambda e: e[1] - e[0])
    return S[i: j+1]

x = Solution()
f = x.minWindow
assert f('abcdebdde', 'bde') == 'bcde'
