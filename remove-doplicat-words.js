// Your task is to remove all duplicate words from a string, leaving only single (first) words entries.

// Example:

// Input:

// 'alpha beta beta gamma gamma gamma delta alpha beta beta gamma gamma gamma delta'

// Output:

// // 'alpha beta gamma delta'

// function removeDuplicateWords (s) {
//     s = s.split(' ');
//     output = [];
//     for (let i = 0; i < s.length; i++){
//         if (!output.includes(s[i])){
//             output.push(s[i])
//         }
//     }
//     return output.join(' ');
// }


// console.log(removeDuplicateWords('alpha beta beta gamma gamma gamma delta alpha beta beta gamma gamma gamma delta'))


function removeDuplicateWords (s) {
    let set = new Set(s.split(' '));
    return Array.from(set).join(' ');
    
}


console.log(removeDuplicateWords('alpha beta beta gamma gamma gamma delta alpha beta beta gamma gamma gamma delta'))


const removeDuplicateWords = s => {
    const set = new Set(s.split(' '));
    return Array.from(set).join(' ');
  }