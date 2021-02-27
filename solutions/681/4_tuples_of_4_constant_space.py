class Solution:
  def nextClosestTime(self, time):
    start = 60*int(time[:2]) + int(time[3:])
    digits = {int(x) for x in time if x != ':'}
    
    # because it takes you back to time `time`
    min_elapsed = 24 * 60
    
    ans = start
    from itertools import product
    for h1,h2,m1,m2 in product(digits, repeat=4):
      hours, mins = 10 * h1 + h2, 10 * m1 + m2
      if hours >= 24 or mins >= 60:
        continue
  
      # valid time permuted from digits
      cur = hours * 60 + mins
        
      if cur == start: continue
    
      elapsed = cur - start
      if elapsed < 0: # next day time
        elapsed += 24 * 60
  
      if min_elapsed <= elapsed:
        continue
  
      ans = cur
      min_elapsed = elapsed
  
    return '{:02d}:{:02d}'.format(*divmod(ans, 60))
