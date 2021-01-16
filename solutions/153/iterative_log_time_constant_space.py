def f(A):
    if not A: raise Exception()
    n = len(A)
    if n == 1: return A[0]
    L = 0
    R = n - 1
    if A[L] < A[R]: return A[L]

    while L < R:
        m = L + (R - L) // 2

        if A[m] > A[m+1]:
            return A[m+1]
        if A[m-1] > A[m]:
            return A[m]

        if A[L] < A[m]:
            L = m + 1
        else:
            R = m - 1

assert f([3,4,5,1,2]) == 1
assert f([2,3,4]) == 2
assert f([4,5,6,7,0,1,2]) == 0
