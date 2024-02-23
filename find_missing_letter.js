// Find the missing letter
// Write a method that takes an array of consecutive (increasing) letters as input and that returns the missing letter in the array.

// You will always get an valid array. And it will be always exactly one letter be missing. The length of the array will always be at least 2.
// The array will always contain letters in only one case.

// Example:

// ['a','b','c','d','f'] -> 'e'
// ['O','Q','R','S'] -> 'P'
// (Use the English alphabet with 26 letters!)


// let dict = {'A' : 1, 'B' : 2, 'C' : 3, 'D' : 4, 'E' : 5,'F' : 6, 'G' : 7, 'H' : 8, 'I' : 9, 'J' : 10,'K' : 11, 'L' : 12, 'M' : 13, 'N' : 14, 'O' : 15,'P' : 16, 'Q' : 17, 'R' : 18, 'S' : 19, 'T' : 20,'U' : 21, 'V' : 22, 'W' : 23, 'X' : 24, 'Y' : 25, 'Z' : 26}

function findMissingLetter(array){
  let l = 0;
  let r = 1;
  array = array.join('');
  let missing = 0

  while (r < array.length){
    if (array.charCodeAt(l) != array.charCodeAt(r)-1){
         return String.fromCharCode(array.charCodeAt(l) + 1);
    }
    l+=1;
    r +=1;
  }
}

  


console.log(findMissingLetter(['O','Q','R','S']))

// const sentence = 'The quick brown fox jumps over the lazy dog.';

// const index = 4;

// console.log(`The character code ${sentence.charCodeAt(index)} is equal to ${sentence.charAt(index)}`);
// Expected output: "The character code 113 is equal to q"