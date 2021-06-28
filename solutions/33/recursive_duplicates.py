def f(A, k):
    if not A:
        return -1

    return g(A, k, 0, len(A) - 1)

def g(A, k, l, r):
    if l > r:
        return -1

    m = l + (r - l) // 2

    if A[m] == k:
        return m

    if A[l] < A[m]:
        if A[l] <= k < A[m]:
            return g(A, k, l, m - 1)
        else:
            return g(A, k, m + 1, r)
    elif A[m] < A[r]:
        if A[m] < k <= A[r]:
            return g(A, k, m + 1, r)
        else:
            return g(A, k, l, m - 1)
    else:
        x = g(A, k, l, m - 1)
        if x < 0:
            x = g(A, k, m + 1, r)
        return x

assert f([], 5) == -1
assert f([-1, 0, 1, 2, 5, 7, -5, -3], -5) == 6
assert f([-1, 0, 1, 2, 5, 7, -5, -3], -2) == -1
assert f([2 , 4, 2, 2, 2, 2], 4) == 1
assert f([5], 5) == 0
assert f([-2, -1, 0, 1, 2, 3, 4, 5], 4) == 6
assert f([2, 2, 2, 3, 4, 2], -5) == -1
assert f([2, 2, 2, 3, 4, 2], 2) == 2
assert f([2, 2, 2, 3, 4, 2], 3) == 3
assert f([2, 2, 2, 3, 4, 2], 4) == 4
assert f([3, 4, 2, 2, 2, 2], -5) == -1
assert f([3, 4, 2, 2, 2, 2], 2) == 2
assert f([3, 4, 2, 2, 2, 2], 4) == 1
assert f([3, 4, 2, 2, 2, 2], 3) == 0
assert f([3, 4, 1, 2, 2, 2], 3) == 0
assert f([2, 4, 2, 2, 2, 2], 4) == 1
