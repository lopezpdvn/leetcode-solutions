def f(s):
    if s is None: raise Exception()
    if not s: return 1

    n = len(s)
    if n == 1 and s != '0': return 1

    a = 1
    b = 0 if s == '0' else 1

    c = 0
    for i in range(2, n+1):
        c = 0

        if s[i-1] != '0':   c += a

        num = int(s[i-2:i])
        if 10 <= num <= 26: c += b

        a, b = b, c

    return c

assert f('') == 1
assert f('12') == 2
assert f('09') == 1
assert f('226') == 3
assert f('2') == 1
assert f('111') == 3
