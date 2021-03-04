class Logger(object):

    def __init__(self):
        """
        Initialize your data structure here.
        """
        self._msg_dict = {}
    
    def shouldPrintMessage(self, timestamp, message):
        """
        Returns true if the message should be printed in the given timestamp, otherwise returns false.
        """
        if message not in self._msg_dict:
            # case 1). add the message to print
            self._msg_dict[message] = timestamp
            return True

        if timestamp - self._msg_dict[message] >= 10:
            # case 2). update the timestamp of the message
            self._msg_dict[message] = timestamp
            return True
        else:
            return False

x = Logger()
assert x.shouldPrintMessage(1, 'foo')
assert x.shouldPrintMessage(2, 'bar')
assert not x.shouldPrintMessage(3, 'foo')
assert not x.shouldPrintMessage(8, 'bar')
assert not x.shouldPrintMessage(10, 'foo')
assert x.shouldPrintMessage(11, 'foo')
