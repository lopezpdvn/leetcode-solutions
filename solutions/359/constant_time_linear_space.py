class Logger(object):
  def __init__(self):
    self._msg_dict = {}
  
  def shouldPrintMessage(self, timestamp, msg):
    if msg not in self._msg_dict:
      self._msg_dict[msg] = timestamp
      return True

    if timestamp - self._msg_dict[msg] >= 10:
      self._msg_dict[msg] = timestamp
      return True

    return False

x = Logger()
assert x.shouldPrintMessage(1, 'foo')
assert x.shouldPrintMessage(2, 'bar')
assert not x.shouldPrintMessage(3, 'foo')
assert not x.shouldPrintMessage(8, 'bar')
assert not x.shouldPrintMessage(10, 'foo')
assert x.shouldPrintMessage(11, 'foo')
