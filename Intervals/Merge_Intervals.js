/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */

var merge = function(intervals) {
  if(intervals === []) {
     return []
  }
  intervals.sort((a, b) => b[0] - a[0] );
  
  const result = [intervals.pop()];
  
  while (intervals.length > 0) {
      
      let last = result.length - 1;
      
      const [start1, end1] = result[last];
      
      const [start2, end2] = intervals.pop();
      
      if (end1 >= start2) {
          let min_start = Math.min(start1, start2)
          let max_end = Math.max(end1, end2)
          result[last] = [min_start, max_end]
      }
      else{
           result.push([start2, end2]);
      }
  }
  return result
};

merge([[1,3],[2,6],[8,10],[15,18]]) //=> [[1,6],[8,10],[15,18]]