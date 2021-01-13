def is_celebrity(m, n):
    for i in range(n):
        if i == m:
            continue
        if knows(m, i):
            return False
        if not knows(i, m):
            return False

    return True

def f(n):
    for i in range(n):
        if is_celebrity(i):
            return i
    return -1
