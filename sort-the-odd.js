// DESCRIPTION:
// Task
// You will be given an array of numbers. You have to sort the odd numbers in ascending order while leaving the even numbers at their original positions.

// Examples
// [7, 1]  =>  [1, 7]
// [5, 8, 6, 3, 4]  =>  [3, 8, 6, 5, 4]
// [9, 8, 7, 6, 5, 4, 3, 2, 1, 0]  =>  [1, 8, 3, 6, 5, 4, 7, 2, 9, 0]

//Pseudo:
//  filter out odds
// sort them in array
//  loop through original array replacing each odd with the next one in the sorted array.

// function sortArray(array) {
//     let odds = array.filter(e => e % 2 != 0);
//     odds.sort(function(a,b) {
//         return a - b
//     }); 
//     let output = [];
//     let j = 0;
//     console.log(odds);
//     for (let i = 0; i < array.length; i++){
//         if (array[i] % 2 != 0){
//             array[i] = odds[j]
//             j+=1
//         }
//         output.push(array[i])
//     }
//     return output
//   }


// console.log(sortArray([ 1, 11, 2, 8, 3, 4, 5 ]))
// //should equal:  [ 1, 3, 2, 8, 5, 4, 11 ]

function sortArray(array) {
    let odds = array.filter(e => e % 2 != 0).sort((a,b) => a - b);
    let output = [];
    let j = 0;
    console.log(odds);
    for (let i = 0; i < array.length; i++){
        if (array[i] % 2 != 0){
            array[i] = odds[j]
            j+=1
        }
        output.push(array[i])
    }
    return output
  }


console.log(sortArray([ 1, 11, 2, 8, 3, 4, 5 ]))
//should equal:  [ 1, 3, 2, 8, 5, 4, 11 ]