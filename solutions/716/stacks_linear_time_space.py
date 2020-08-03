class MaxStack(list):
    def push(self, x):
        m = max(x, self[-1][1] if self else x)
        self.append((x, m))

    def pop(self):
        return list.pop(self)[0]

    def top(self):
        return self[-1][0]

    def peekMax(self):
        return self[-1][1]

    def popMax(self):
        m = self[-1][1]
        b = []
        while self[-1][0] != m:
            b.append(self.pop())

        self.pop()
        map(self.push, reversed(b))
        return m

x = MaxStack()
x.push(5)
x.push(1)
x.push(5)
assert x.top() == 5
assert x.popMax() == 5
assert x.top() == 1
assert x.peekMax() == 5
assert x.pop() == 1
assert x.top() == 5

print('OK!')
