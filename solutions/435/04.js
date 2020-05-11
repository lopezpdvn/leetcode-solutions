const eraseOverlapIntervals = intervals => {
  if(!intervals)
    throw new Error('Invalid input');

  let count = 0;
  if(!intervals.length) return count;

  intervals.sort((a, b) => a[0] - b[0]);
  let prev = 0;

  for(let i = 1; i < intervals.length; i++) {
    if(intervals[prev][1] > intervals[i][0]) {
      if(intervals[prev][1] > intervals[i][1])
        prev = i;
      count++;
    }
    else prev = i;
  }

  return count;
};
