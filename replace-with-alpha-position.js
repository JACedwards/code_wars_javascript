
// Welcome.

// In this kata you are required to, given a string, replace every letter with its position in the alphabet.

// If anything in the text isn't a letter, ignore it and don't return it.

// "a" = 1, "b" = 2, etc.

// Example
// Input = "The sunset sets at twelve o' clock."
// Output = "20 8 5 19 21 14 19 5 20 19 5 20 19 1 20 20 23 5 12 22 5 15 3 12 15 3 11"

// function alphabetPosition(text) {
//     let numArr = Array.from( 
//         {length: (26 - 1) / 1 + 1},
//         (value, index) => 1 + index * 1
//     );
//     let alphaArr = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
//     let obj = {}
//     let buildAlphaObj = alphaArr.map((e,i) => obj[e] = numArr[i]);
    
//     return text.split('').map(e => /[A-Za-z]/.test(e) ? obj[e.toLowerCase()] : '').filter(e => e !== '').join(' ');
  
// }

// console.log(alphabetPosition("The sunset sets at twelve o' clock."));


function alphabetPosition(text) {
    text = text.toLowerCase().replace(/[^a-z]/g, '');
    return [...text].map((e) => e.charCodeAt(0) - 96).join(' ');
  
}

console.log(alphabetPosition("The sunset sets at twelve o' clock."));

// // code wars solutions

// function alphabetPosition(text) {
//     var result = "";
//     for (var i = 0; i < text.length; i++){
//       var code = text.toUpperCase().charCodeAt(i)
//       if (code > 64 && code < 91) result += (code - 64) + " ";
//     }
  
//     return result.slice(0, result.length-1);
//   }

//   function alphabetPosition(text) {
//     var alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');
//     return text.toLowerCase().split('')
//     .filter( letter => {
//       let index = alphabet.indexOf(letter);
//       return index > -1;
//     }  )
//     .map( letter => alphabet.indexOf(letter) + 1 )
//     .join(' ')
//   }

//   function alphabetPosition(text) {
//     return text.toLowerCase().split('').map(a => a.charCodeAt(0) - 96).filter(a => a > 0 && a < 27).join(' ');
//   }

//   function alphabetPosition(text) {
//     const letters = 'abcdefghijklmnopqrstuvwxyz';
    
//     return text.toLowerCase()
//                .split('')
//                .filter(t => letters.indexOf(t) > -1)
//                .map(t => letters.indexOf(t)+1 || '')
//                .join(' ');
//   }

//   function alphabetPosition(text) {
  
//     var alphabet = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
    
    
//     return text.toLowerCase().replace(/[^a-z]/g,'').split('').map(x => alphabet.indexOf(x)+1).join(' ');
//   } 