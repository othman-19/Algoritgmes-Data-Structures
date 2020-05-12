// CODING CHALLENGE: Container With Most Water

/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
  return helper(height, height.length-1, 0, 0);
};

let helper = function(arr, r, l, max) {
  let index_dif;
  let min_line;
  
  if(r <= l){
      return max;
  }
  
  min_line = arr[r] < arr[l] ? arr[r] : arr[l];
  index_dif = r - l;
  
 if(min_line * index_dif > max){
     max = min_line * index_dif;
 }
 
 if(arr[r] <= arr[l]){
     return helper(arr, r - 1, l, max)
 }
  
  if(arr[r] > arr[l]){
     return helper(arr, r , l + 1, max)
 }

  return max;
 
}