def f(m, n):
    A = [[1 for j in range(n)] for i in range(m)]

    for i in range(1, m):
        for j in range(1, n):
            A[i][j] = A[i - 1][j] + A[i][j - 1]

    return A[-1][-1]

assert f(2, 3) == 3
assert f(3, 7) == 28
