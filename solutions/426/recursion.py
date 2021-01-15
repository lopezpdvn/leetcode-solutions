def f(p):
    def IODFT(p):
        nonlocal dll_head, prev

        if p is None: return p

        IODFT(p.left)

        if dll_head is None:
            dll_head = p

        p.left = prev
        if prev is not None:
            prev.right = p
        prev = p

        IODFT(p.right)

    dll_head = None
    prev = None

    IODFT(p)

    dll_head.left = prev
    prev.right = dll_head

    return dll_head
