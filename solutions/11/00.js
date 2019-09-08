'use strict'; const log = console.log; (async ()=>{

/**
 * @param {number[]} height
 * @return {number}
 */
const maxArea = height => {
  let maxArea = 0, l = 0, r = height.length - 1;

  while(l < r) {
    maxArea = Math.max(
      maxArea, Math.min(height[l], height[r]) *
               (r -l));
    if(height[l] < height[r])
      l++;
    else
      r--;
  }
  return maxArea;
};

})();
