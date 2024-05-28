
// function duplicateEncode(word){
//     const counter = {};
//     word = word.toLowerCase();
 
//     [...word].forEach(ele => {
//         if (counter[ele]) {
//             counter[ele] += 1;
//         } else {
//             counter[ele] = 1;
//         }
//     });
//     output = [];

//     for (let i = 0; i < word.length; i++) {
//         if (counter[word[i]] == 1) {
//             output.push('(')
//         }
//         else {
//             output.push(')')
//         }
//     }

//     return output.join('');
// }

// console.log(duplicateEncode("Success"));
//    assert.strictEqual(duplicateEncode("Success"),")())())","should ignore case");


//"recede"   =>  "()()()"


// function duplicateEncode(word){
//     const counter = {};
//     word = word.toLowerCase();
 
//     [...word].forEach(ele => {
//         if (counter[ele]) {
//             counter[ele] += 1;
//         } else {
//             counter[ele] = 1;
//         }
//     });

//     return [...word].map(e => counter[e] == 1 ? e = '(' : e = ')').join('');
// }

// console.log(duplicateEncode("Success"));

function duplicateEncode(word){
    word = word.toLowerCase();


    return [...word].map((e, i, w) => w.indexOf(e) == w.lastIndexOf(e) ? e = '(' : e = ')').join('');
}

console.log(duplicateEncode("Success"));





