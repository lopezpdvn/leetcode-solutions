'use strict'; const log = console.log; (async ()=>{

/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
const merge = intervals => {

  intervals.sort((a, b) => {
    if(a[0] < b[0])
      return Number.NEGATIVE_INFINITY;
    else if(a[0] === b[0])
      return 0;
    else
      return Number.POSITIVE_INFINITY;
  });

  const merged = [];
  for(const interval of intervals) {
    const lastInMerged = merged[merged.length-1];
    if(!merged.length ||
       lastInMerged[1] < interval[0])
      merged.push(interval);
    else
      lastInMerged[1] =
        Math.max(lastInMerged[1], interval[1]);
  }

  return merged;

};

const x = [[1,3],[2,6],[8,10],[15,18]];
log(merge(x))

})();
