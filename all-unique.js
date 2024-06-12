// Write a program to determine if a string contains only unique characters. Return true if it does and false otherwise.

// The string may contain any of the 128 ASCII characters. Characters are case-sensitive, e.g. 'a' and 'A' are considered different characters.

function hasUniqueChars(str){
    // str = str.split('');
    let newSet = new Set([...str]);
    return newSet.size === str.length ? true : false;
  }

console.log(hasUniqueChars('-$aA '))

//regex version

// function hasUniqueChars(str) {
//     return !/(.).*\1/.test(str);
//   }