
// You should implement your task here.

module.exports = function towelSort (matrix) {
  let towelSortArr = [];
  if (!matrix) {
    return towelSortArr;
  }

    

  for (let index = 0; index < matrix.length; index++) {
  
    towelSortArr = towelSortArr.concat(matrix[index]);
   if (index+1 < matrix.length) {
     index++;
    towelSortArr = towelSortArr.concat(matrix[index].reverse());
   }
    
  }
  return  towelSortArr;
}
