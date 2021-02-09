def f(A):
    n = len(A)
    L = 0
    R = n - 1

    while L < R:
        M = L + (R - L) // 2

        if A[M] > A[M + 1]:
            R = M
        else:
            L = M + 1

    return L

assert f([1, 2, 3, 1]) == 2
assert f([1, 2, 1, 3, 5, 6, 4]) == 5
assert f([-5]) == 0
