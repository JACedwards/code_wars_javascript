
// Task
// Given an array of integers , Find the maximum product obtained from multiplying 2 adjacent numbers in the array.

// Notes
// Array/list size is at least 2.

// Array/list numbers could be a mixture of positives, negatives also zeroes .

// Input >> Output Examples
// adjacentElementsProduct([1, 2, 3]); ==> return 6
// Explanation:
// The maximum product obtained from multiplying 2 * 3 = 6, and they're adjacent numbers in the array.

function adjacentElementsProduct(array) {
    let l = 0;
    let r = 1;
    let prod = 0;
    let max = Number.NEGATIVE_INFINITY
    while (r < array.length){
        prod = array[l]*array[r];
        if (prod > max){
            max = prod;
          
        }
        l+=1
        r+=1

    }
    return max;
  }

console.log(adjacentElementsProduct([-23, 4, -5, 99, -27, 329, -2, 7, -921]))

// code wars:
// function adjacentElementsProduct(array) {
//     let newArr = []
//     for(i=0; i < array.length-1; i++){
//       newArr.push(array[i]*array[i+1])
//     }  
//     return Math.max(...newArr)
//   }
//90