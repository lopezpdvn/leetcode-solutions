def f(s):
    if s is None: raise Exception()
    n = len(s)
    if not n: return 1
    if n == 1 and s[0] != '0': return 1
    x = int(s[:2])
    if n == 2 and 10 <= x <= 26: return 2

    minus1c = 2
    minus2c = 1
    for i in range(2, n):
        pathSum = 0
        if s[i] != '0': pathSum += minus1c

        x = int(s[i-1:i+1])
        if 10 <= x <= 26: pathSum += minus2c

        minus1 = pathSum
        minus2 = minus1

    return pathSum

assert f('') == 1
assert f('12') == 2
assert f('226') == 3
assert f('2') == 1
assert f('111') == 3
