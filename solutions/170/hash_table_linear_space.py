class TwoSum(object):
  def __init__(self):
    self.num_counts = {}

  def add(self, number):
    if number in self.num_counts:
      self.num_counts[number] += 1
    else:
      self.num_counts[number] = 1

  def find(self, value):
    """
    Find if there exists any pair of numbers which sum is equal to the value.
    :type value: int
    :rtype: bool
    """
    for num in self.num_counts.keys():
      comple = value - num
      if num != comple:
        if comple in self.num_counts:
          return True
      elif self.num_counts[num] > 1:
        return True
    
    return False

x = TwoSum()
x.add(1)
x.add(3)
x.add(5)
assert x.find(4)
assert not x.find(7)
