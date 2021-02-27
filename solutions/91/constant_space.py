def f(s):
    if s is None: raise Exception()

    n = len(s)
    a = 1
    if not n: return a

    b = 0 if s[0] == '0' else 1
    if n == 1: return b

    for i in range(2, n + 1):
        c = 0

        x = int(s[i - 2:i])
        if 10 <= x <= 26:
            c += a

        if s[i - 1] != '0':
            c += b

        a, b = b, c

    return c

assert f('') == 1
assert f('12') == 2
assert f('09') == 0
assert f('226') == 3
assert f('2') == 1
assert f('111') == 3
