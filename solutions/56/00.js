'use strict'; const log = console.log; (async ()=>{

/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
const merge = intervals => {

  intervals.sort((a, b) => {
    if     (a[0] < b[0])
      return Number.NEGATIVE_INFINITY;
    else if(b[0] < a[0])
      return Number.POSITIVE_INFINITY;
    else
      return 0;
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

const inputs = [];
inputs.push([[1,3],[2,6],[8,10],[15,18]]);
inputs.push([[1,9],[2,5],[19,20],[10,11],
             [12,20],[0,3],[0,1],[0,2]]);

inputs.forEach(x => log(merge(x)));

})();
