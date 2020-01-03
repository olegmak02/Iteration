'use strict';

const max = matrix => {
  let maxValue = matrix[0][0];
  for (let i = 0; i < matrix.length; i++) {
    const arr = matrix[i];
    for (let j = 0; j < arr.length; j++) {
      if (maxValue < arr[j]) {
        maxValue = arr[j];
      }
    }
  }
return maxValue;
};


module.exports = { max };
