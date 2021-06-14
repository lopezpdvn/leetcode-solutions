from collections import Counter

class SlidingWindow:
    def __init__(self, L = 0, R = -1):
        self.L = L
        self.R = R
    def __len__(self):
        return self.R - self.L + 1

def f(A):
    mset = Counter()
    sws = {}
    A_deg = 1 # nonempty arr by definition

    for i, e in enumerate(A):
        if sws.get(e) is None:
            sws[e] = SlidingWindow(i)
        sws[e].R = i
        mset[e] += 1
        A_deg = max(A_deg, mset[e])

    shortst_len = len(A)
    for e, sw in sws.items():
        if mset[e] != A_deg:
            continue
        shortst_len = min(shortst_len, len(sw))

    return shortst_len

assert f([9]) == 1
assert f([1,2,2,3,1]) == 2
assert f([1,2,2,3,1,4,2]) == 6
