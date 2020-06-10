/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function(nums1, m, nums2, n) {
  m-=1; n-=1;
  
  for (let i = nums1.length-1; i >= 0; i -= 1){
      if( n < 0 ){
          return
      }
      if(m >= 0 && nums1[m] > nums2[n]){
          nums1[i] = nums1[m]
          m -= 1
      }else {
          nums1[i] = nums2[n]
          n -= 1
      }
  }
  
};

merge([1,2,3,0,0,0], 3, [2,5,6], 3); // => [1,2,2,3,5,6]