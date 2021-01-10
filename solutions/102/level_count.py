from collections import deque

def f(p):
    out = deque()
    if p is None: return out
    queue = deque()
    queue.appendleft(p)
    while queue:
        lvl_list = deque()
        nLvl = len(nLvl)
        for i in range(nLvl):
            p = queue.pop()
            lvl_list.append(p)

            for child in p:
                queue.appendleft(child)

        out.append(lvl_list)

    return out
