// Trolls are attacking your comment section!

// A common way to deal with this situation is to remove all of the vowels from the trolls' comments, neutralizing the threat.

// Your task is to write a function that takes a string and return a new string with all vowels removed.

// For example, the string "This website is for losers LOL!" would become "Ths wbst s fr lsrs LL!".

// Note: for this kata y isn't considered a vowel.

// function disemvowel(str) {
//     let vowel = 'aeiou'
//     for (let i = 0; i < str.length; i++){
//         if (vowel.includes(str[i].toLowerCase())) {
//             str = `${str.slice(0,i)}${str.slice(i+1)}`
//         }
//     }
//     return str
//   }

// console.log(disemvowel("This website is for losers LOL!"))

// function disemvowel(str) {
//     let vowel = 'aeiou'

//     str.split('').forEach(e => vowel.includes(e.toLowerCase()) ? 
//     str = `${str.slice(0,str.indexOf(e))}${str.slice(str.indexOf(e)+1)}` : 
//     str = str)
    
//     return str
//   }

// console.log(disemvowel("This website is for losers LOL!"))

// function disemvowel(str) {
//   let vowels = ['a','e','i','o','u']
//   str = str.split('');
//   let noVowels = [];
//   for (let i = 0; i < str.length; i++) {
//     if (vowels.indexOf(str[i]) == -1) {
//       noVowels.push(str[i]);
//     }
//   }
//   return noVowels.join('');
// }

// console.log(disemvowel("This website is for losers LOL!"))

function disemvowel(str) {
 
  return str.replace(/[aeiou]/gi, '')
}

console.log(disemvowel("This website is for losers LOL!"))