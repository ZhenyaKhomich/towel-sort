
// You should implement your task here.

module.exports = function towelSort (matrix) {
  let a = [];

 if(!matrix) {
  return a;
 }

  for(let i = 0; i < matrix.length; i++) {
    if(i % 2 !== 0) {
       matrix[i].reverse(); 
for(let k = 0; k < matrix[i].length; k++){
      a.push(matrix[i][k]);
  }
    } else if (i % 2 ==0) {
  for(let k = 0; k < matrix[i].length; k++){
      a.push(matrix[i][k]);
    }
  }

  }

return a;
}
