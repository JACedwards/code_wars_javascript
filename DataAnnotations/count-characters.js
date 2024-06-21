
// function countChars(str, char) {
//   // Base case: If the string is empty, there are no characters to count.
//   if (str.length === 0) {
//     return 0;
//   }

//   // Check the first character
//   const isFirstCharMatch = str[0] === char;

//   // Slice off the first character, and recursively call the function on the remaining substring
//   return (isFirstCharMatch ? 1 : 0) + countChars(str.slice(1), char);
// }

// // const myString = "Hello, world!";
// // const targetChar = "l";
// // const count = countChars(myString, targetChar);
// console.log(countChars("Hello, world!", "l")); // Output: 3

function countChars(str, char) {
  // Base case: if the string is empty, return 0
  if (str.length === 0) {
    return 0;
  }
  
  // Check the first character and call countChars on the rest of the string
  if (str[0] === char) {
    return 1 + countChars(str.slice(1), char);
  } else {
    return countChars(str.slice(1), char);
  }
}

// Example usage
console.log(countChars("hello", "l")); // Output: 2
console.log(countChars("world", "w")); // Output: 1
console.log(countChars("recursion", "r")); // Output: 2
 