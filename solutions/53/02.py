import math

def f(A):
    curr_suba_sum = -math.inf
    max_sum = -math.inf

    for e in A:
        curr_suba_sum = max(e, curr_suba_sum + e)
        max_sum = max(max_sum, curr_suba_sum)

    return max_sum

assert f([2]) == 2
assert f([-2, 1, -3, 4, -1, 2, 1, -5, 4]) == 6
assert f([-5, -5, 2]) == 2
