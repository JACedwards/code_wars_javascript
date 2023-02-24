// Given an array of integers.

// Return an array, where the first element is the count of positives numbers and the second element is sum of negative numbers. 0 is neither positive nor negative.

// If the input is an empty array or is null, return an empty array.

// Example
// For input [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15], you should return [10, -65].


// function countPositivesSumNegatives(input) {
//     if (input === null){
//       return []
//       }
//     else if (input.length == 0){
//       return []
//     }
    
//     negatives = 0;
//     positives = 0;
//     for (let i = 0; i < input.length; i++){
//         if (input[i] <= 0){
//             negatives = negatives + input[i];
//         }
//         else {
//             positives += 1;
//         }
//     }
//     return [positives, negatives]
//   }

// console.log(countPositivesSumNegatives([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15]))




function countPositivesSumNegatives(input) {

    if (input === null || input.length == 0){
        return []
        }

    let negatives = 0;
    let positives = 0;
    input.map(e => e <= 0 ? negatives = negatives + e : positives += 1)
    
    return [positives, negatives]
  }

console.log(countPositivesSumNegatives(null))


