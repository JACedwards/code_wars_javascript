// Move the first letter of each word to the end of it, then add "ay" to the end of the word. Leave punctuation marks untouched.

// Examples
// pigIt('Pig latin is cool'); // igPay atinlay siay oolcay
// pigIt('Hello world !');     // elloHay orldway !

// function pigIt(str){
//     let arrSplit = str.split(' ');
//     let outputArr = [];
//     let regEx = new RegExp('[A-Za-z]')
//     let pigStr = '';

//     for (let i = 0; i < arrSplit.length; i++) {
//         if (!arrSplit[i].match(regEx)) {
//             outputArr.push(arrSplit[i]);
//         }
//         else {
//             pigStr = `${arrSplit[i].slice(1)}${arrSplit[i][0]}ay`
//             outputArr.push(pigStr);
//         }
//     }
//     return outputArr.join(' ');
//   }

// console.log(pigIt('Hello world !'))

function pigIt(str){
    let arrSplit = str.split(' ');

    return arrSplit.map(e => !e.match(/[A-Za-z]/) ? e : `${e.slice(1)}${e[0]}ay`).join(' ');
  }

console.log(pigIt('Hello world !'))