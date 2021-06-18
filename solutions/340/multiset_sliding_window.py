from collections import Counter

def f(s, k):
    if s is None or k is None or k < 0:
        raise Exception()
    max_len = 0
    sw = SlidingWindow(s)

    for c in s:
        sw.slideR(c)

        while len(sw) and sw.dimension > k:
            sw.slideL()

        max_len = max(max_len, len(sw))

    return max_len

class SlidingWindow(Counter):
    def __init__(self, target):
        super()
        self.L = 0
        self.R = -1
        self.target = target

    def slideR(self, e):
        self.R += 1
        self[e] += 1

    def slideL(self):
        c = self.target[self.L]
        self.L += 1
        self[c] -= 1
        if c in self and not self[c]:
            del self[c]

    @property
    def dimension(self):
        return super().__len__()

    def __len__(self):
        return self.R - self.L + 1

assert f('eceba', 2) == 3
assert f('aa', 1) == 2
assert f('loveleetcode', 4) == 7
assert f('xxxxxxxxxx', 2) == 10
assert f('xxxxxxxxxx', 1) == 10
assert f('xxxxxxxxxx', 0) == 0
