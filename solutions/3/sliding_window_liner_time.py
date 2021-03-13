def f(s):
    if s is None:
        raise Exception()

    from collections import defaultdict
    el2index = defaultdict()

    maxLen = i = j = 0

    for c in s:
        k = el2index.get(c)
        if k is not None:
            i = max(i, k + 1)
        el2index[c] = j
        maxLen = max(maxLen, j - i + 1)
        j += 1

    return maxLen

assert f('abcabcbb') == 3
assert f('bbbbb') == 1
assert f('pwwkew') == 3
