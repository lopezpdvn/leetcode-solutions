const eraseOverlapIntervals = intervals => {
  if(!intervals)
    throw new Error('Invalid input');

  let count = 0;
  if(!intervals.length) return count;

  intervals.sort((a, b) => a[0] - b[0]);
  let prev = intervals[0];

  for(let i = 1; i < intervals.length; i++) {
    const curr = intervals[i];
    if(prev[1] > curr[0]) {
      if(prev[1] > curr[1])
        prev = curr;
      count++;
    }
    else prev = curr;
  }

  return count;
};
