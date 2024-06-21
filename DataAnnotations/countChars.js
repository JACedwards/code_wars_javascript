
// function countChars(str, char) {
//     if (str.length === 0) {
//         return 0; // Base case: empty string, no occurrences
//     } else if (str.slice(0, 1) === char) {
//         // Check first character, recurse with the rest
//         return 1 + countChars(str.slice(1), char); 
//     } else {
//         // First character doesn't match, recurse without it
//         return countChars(str.slice(1), char);
//     }
// }

// console.log(countChars("banana", "a"));    // Output: 3
// console.log(countChars("Mississippi", "s")); // Output: 4
// console.log(countChars("hello world", "z")); // Output: 0




//Response B:

function countChars(str, char) {
    // Base case: If the string is empty, the character can't appear.
    if (str.length === 0) {
      return 0;
    }
  
    // Check the first character
    const count = (str[0].toLowerCase() === char.toLowerCase()) ? 1 : 0;
  
    // Recurse with the rest of the string (slicing off the first character)
    return count + countChars(str.slice(1), char);
  }

const str = "Hello, World!";
const char = "l";
const count = countChars(str, char); 

console.log(`The character '${char}' appears ${count} times in the string.`); // Output: The character 'l' appears 3 times in the string.
