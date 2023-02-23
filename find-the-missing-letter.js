// Write a method that takes an array of consecutive (increasing) letters as input and that returns the missing letter in the array.

// You will always get an valid array. And it will be always exactly one letter be missing. The length of the array will always be at least 2.
// The array will always contain letters in only one case.

// Example:

// ['a','b','c','d','f'] -> 'e'
// ['O','Q','R','S'] -> 'P'
// (Use the English alphabet with 26 letters!)

function findMissingLetter(array){
    array = array.join('');
    let first = array.charCodeAt(0);
    console.log(first);
    let second = 1;
    
    for (let i = 1; i < array.length; i++) {
        second = array.charCodeAt(i)
        if (second != first+1){
            return String.fromCharCode(first+1);
        }
        first+=1
    }


// console.log(`The character code ${array.charCodeAt(index)} is equal to ${array.charAt(index)}`);
// //   return array.charCodeAt(0);
}

console.log(findMissingLetter(['a','b','c','d','f']))