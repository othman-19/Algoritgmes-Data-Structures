/**
 * @param {character[][]} grid
 * @return {number}
 */

// pseudo code

// numIslands function:
// set a counter to zero.
// check every element in the grid.
// if the element is '1' (land) check left, right, top, bottom to see if 
// there is connected '1's.
// when we finish checking we increment the counter by 1.

// bfs helper function:
// will return null when the parameters bigger than the grig length or less //than 0.
// will return null when the paramenter != 1.
// will set every element visited as visited by changing the value to 'x'.
// will do do recursively the same operation for neighbors.

var numIslands = function(grid) {
  if(!grid){
      return 0
  }
  let counter = 0;
  for (let i = 0; i < grid.length; i += 1){
      for(let j = 0; j < grid[0].length; j += 1){
          if (grid[i][j] === '1'){
              bfs_helper(grid, i, j);
              counter += 1;
          }
      }
  }
  return counter
}

var bfs_helper = function(grid, i, j){
  if (i >= grid.length || i < 0 || j >= grid[0].length || j < 0 || grid[i][j] !== '1'){
      return;
  }
  grid[i][j] = 'x'
  bfs_helper(grid, i + 1, j);
  bfs_helper(grid, i - 1, j);
  bfs_helper(grid, i, j - 1);
  bfs_helper(grid, i, j + 1);
}

let grid_1 = [
              ["1","1","1","1","0"],
              ["1","1","0","1","0"],
              ["1","1","0","0","0"],
              ["0","0","0","0","0"]
            ]
numIslands(grid_1) // => 1
