class TwoSum(object):
  def __init__(self):
    from collections import Counter
    self.num_counts = Counter()

  def add(self, number):
    self.num_counts[number] += 1

  def find(self, value):
    for num in self.num_counts:
      comple = value - num
      min_multiplicity = 2 if num == comple else 1
      return (    self.num_counts[comple]
               >= min_multiplicity)

# Time: O(n)
# Space: O(n)

x = TwoSum()
x.add(1)
x.add(3)
x.add(5)
assert x.find(4)
assert not x.find(7)
