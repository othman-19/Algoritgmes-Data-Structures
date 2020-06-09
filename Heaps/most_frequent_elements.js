// pseudo code:
// craeting a hash: every element is related to number of its repetition in the array.
// creating an array of keys from the hash.
// sort this array of keys by their value in the hash.
// slice the sorted kays array using K.

var topKFrequent = function(nums, k) {
  let hash = {};
  for (let element of nums){
      if(hash[element]){
          hash[element]  += 1
      }
      else {
         hash[element] = 1  
      }
  }
  
  let keys = Object.keys(hash);
  keys = keys.sort((a, b) => hash[b] - hash[a]);
  return keys.slice(0, k);
};

topKFrequent([1,1,1,2,2,3], 2) // => [1,2]