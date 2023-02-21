// Welcome. In this kata, you are asked to square every digit of a number and concatenate them.

// For example, if we run 9119 through the function, 811181 will come out, because 92 is 81 and 12 is 1. (81-1-1-81)

// Example #2: An input of 765 will/should return 493625 because 72 is 49, 62 is 36, and 52 is 25. (49-36-35)

// Note: The function accepts an integer and returns an integer.

//Pseudo:
//  tostring
//  split
//  for loop squared + concatinate
//  concatination parseInt()

// function squareDigits(num){
//     num = num.toString();
//     num = num.split('');
//     let output = ''
//     for (i=0; i< num.length; i++){
//         sq = Math.pow(num[i], 2);
//         output = `${output}${sq}`;
//     }
//     return parseInt(output)
//   }

// console.log(squareDigits( 765))

// function squareDigits(num){
//     num = num.toString()
//               .split('');
//     let output = []
//     for (i=0; i< num.length; i++){
//         sq = Math.pow(num[i], 2);
//         output.push(sq);
//     }
//     return parseInt(output.join(''));
//   }

// console.log(squareDigits( 765))

function squareDigits(num){
    num = num.toString()
              .split('');
    output = num.map(e => e*e);
    return parseInt(output.join(''));
}

console.log(squareDigits( 765))