// There is an array with some numbers. All numbers are equal except for one. Try to find it!

// findUniq([ 1, 1, 1, 2, 1, 1 ]) === 2
// findUniq([ 0, 0, 0.55, 0, 0 ]) === 0.55
// It’s guaranteed that array contains at least 3 numbers.

// The tests contain some very huge arrays, so think about performance.


// function findUniq(arr) {
//     numSet = new Set(arr);
//     numArr = Array.from(numSet);
//     if (numArr[0] == arr[0] && numArr[0] == arr[1]){
//         return numArr[1]
//     }
//     return numArr[0];
//   }

// console.log(findUniq([ 1, 0, 0]))

function findUniq(arr) {
    numSet = new Set(arr);
    numArr = Array.from(numSet);
    return (numArr[0] == arr[0] && numArr[0] == arr[1]) ? numArr[1] : numArr[0];
  }

console.log(findUniq([ 1, 0, 0]))
  