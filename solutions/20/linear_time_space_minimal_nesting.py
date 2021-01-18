def f(s):
    from collections import deque
    if not s: return True
    if len(s) %  2: return False
    matcher = {')': '(', ']': '[', '}': '{'}
    stack = deque()

    for c in s:
        if c not in matcher:
            stack.append(c)
            continue

        expected_pair = matcher[c]
        if stack[-1] != expected_pair:
            return False

        stack.pop()

    return not stack

assert not f('([)]')
assert f('{[]}')
assert f('()[]{}')
assert not f('[[[[')
