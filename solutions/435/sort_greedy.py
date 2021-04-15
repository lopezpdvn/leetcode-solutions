def f(A):
    if not A: return 0

    A.sort()
    prev = A[0]
    count = 0

    for curr in A[1:]:
        if prev[1] <= curr[0]:
            prev = curr
            continue

        count += 1

        if prev[1] >= curr[1]:
            prev = curr

    return count

assert f([[1,2], [2,3], [3,4], [1,3]]) == 1
assert f([[1,2], [1,2], [1,2]]) == 2
assert f([[1,2], [2,3]]) == 0
assert f([[0,2], [1,3], [2,4], [1,6], [3,5]]) == 3
