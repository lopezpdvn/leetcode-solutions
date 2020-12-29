def f(A):
    n = len(A)
    B = [1] * n

    for i in range(1, n):
        B[i] = A[i - 1] * B[i - 1]

    right_product = 1
    for i in range(n - 2, -1, -1):
        right_product *= A[i + 1]
        B[i] *= right_product

    return B

assert f([1,2,3,4]) == [24,12,8,6]
