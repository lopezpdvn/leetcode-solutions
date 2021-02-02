def f(A, k):
    if not A or len(A) < 2:
        raise Exception()

    e2i = {}

    for i, addend1 in enumerate(A):
        addend0 = k - addend1
        iAddend0 = e2i.get(addend0)
        if iAddend0 is not None:
            return (iAddend0, i)
        e2i[addend1] = i
