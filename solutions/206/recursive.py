def f(p):
    if not p or not p.next:
        return p
    q = f(p.next)
    p.next.next = p
    p.next = None
    return q
