def f(A):
    n = len(A)
    L = 0
    R = n - 1
    from math import inf
    max_area = -inf

    while L < R:
        height = min(A[L], A[R])
        width = R - L
        max_area = max(max_area, height * width)

        if A[L] <= A[R]:
            L += 1
        else:
            R -= 1

    return max_area

assert f((1,8,6,2,5,4,8,3,7)) == 49
