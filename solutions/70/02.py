def f(n):
    A = [int()] * (n + 1)
    return g(n, A)


def g(k, A):
    if k < 0:
        return 0

    if k < 2:
        return 1

    if not A[k]:
        A[k] = g(k - 1, A) + g(k - 2, A)

    return A[k]

assert f(-2) == 0
assert f(0) == 1
assert f(1) == 1
assert f(2) == 2
assert f(3) == 3
