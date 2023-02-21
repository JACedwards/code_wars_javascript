// Digital root is the recursive sum of all the digits in a number.

// Given n, take the sum of the digits of n. If that value has more than one digit, continue reducing in this way until a single-digit number is produced. The input will be a non-negative integer.

// Examples
//     16  -->  1 + 6 = 7
//    942  -->  9 + 4 + 2 = 15  -->  1 + 5 = 6
// 132189  -->  1 + 3 + 2 + 1 + 8 + 9 = 24  -->  2 + 4 = 6
// 493193  -->  4 + 9 + 3 + 1 + 9 + 3 = 29  -->  2 + 9 = 11  -->  1 + 1 = 2

//Psuedo:  while loop:
//  loop ends when length of n == 1:
//  n toString
//  n split
//  map n summing Number() version of each digit
//  n = sum.tostring
//


function digitalRoot(n) {
    n = n.toString()
         .split('');

    while (n.length > 1){
        zero = 0
        sum = n.reduce((d, e) => Number(d) + Number(e), zero);
        n = sum.toString()
               .split('');
    }
    return Number(n[0])
  }
console.log(digitalRoot(493193))



// const array1 = [1, 2, 3, 4];

// 0 + 1 + 2 + 3 + 4
// const initialValue = 0;
// const sumWithInitial = array1.reduce(
//   (accumulator, currentValue) => accumulator + currentValue,
//   initialValue
// );

// console.log(sumWithInitial);
// Expected output: 10