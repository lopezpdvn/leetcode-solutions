from queue import PriorityQueue

class MedianFinder:
  def __init__(self):
    self.lo = PriorityQueue()
    self.hi = PriorityQueue()

  def addNum(self, num: int) -> None:
    self.lo.put(-num)
    self.hi.put(-self.lo.get())
    if self.lo.qsize() < self.hi.qsize():
      self.lo.put(-self.hi.get())

  def findMedian(self) -> float:
    return (
      -self.lo.queue[0]                 if
      self.lo.qsize() > self.hi.qsize() else
      (-self.lo.queue[0] + self.hi.queue[0]) / 2.0)

x = MedianFinder()
x.addNum(1)
x.addNum(2)
assert x.findMedian() == 1.5
x.addNum(3)
assert x.findMedian() == 2
x.addNum(99)
x.addNum(100)
assert x.findMedian() == 3
