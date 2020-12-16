def f(n):
    if n < 2:
        return 1

    return f(n - 1) + f(n - 2)

assert f(0) == 1
assert f(1) == 1
assert f(2) == 2
assert f(3) == 3
assert f(4) == 5
