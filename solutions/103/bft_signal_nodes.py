def f(p):
    from collections import deque
    if p is None:
        return deque()

    bftq = deque()
    bftq.appendleft(p)
    bftq.appendleft(None)
    l2r = True
    traverse_list = deque()
    lvlL = deque()

    while bftq:
        parnode = bftq.pop()

        if parnode is not None:
            if l2r: lvlL.append(parnode.val)
            else:   lvlL.appendleft(parnode.val)

            if parnode.left is not None:
                bftq.appendleft(parnode.left)
            if parnode.right is not None:
                bftq.appendleft(parnode.right)

        else:
            traverse_list.append(lvlL)
            if not bftq:
                continue
            l2r = not l2r
            bftq.appendleft(None)
            lvlL = deque()

    return traverse_list

class BTNode:
    def __init__(self, val, left  = None,
                            right = None):
        self.val = val
        self.left = left
        self.right = right

node = BTNode(3,
  BTNode(9),
  BTNode(20,
    BTNode(15),
    BTNode(7)))
print((*f(node),))
# (deque([3]), deque([20, 9]), deque([15, 7]))
