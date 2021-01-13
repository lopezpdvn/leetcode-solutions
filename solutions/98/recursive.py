class BTNode:
    def __init__(self, value):
        self.value = value
        self.left = None
        self.right = None

def f(p):
    return g(p, None, None)

def g(p, minVal, maxVal):
    if p is None: return True

    if minVal is not None and minVal >= p.value:
        return False
    if maxVal is not None and p.value >= maxVal:
        return False

    if not g(p.left, minVal, p.value):
        return False

    if not g(p.right, p.value, maxVal):
        return False

    return True
