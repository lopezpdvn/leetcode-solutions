def f(p):
    from collections import deque

    if not p:
        return p

    deque.appendleft(p)

    while deque:
        q = deque.pop()
        q.left, q.right = q.right, q.left

        if q.right:
            deque.appendleft(q.right)
        if q.left:
            deque.appendleft(q.left)

    return p
