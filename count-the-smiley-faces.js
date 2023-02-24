// Given an array (arr) as an argument complete the function countSmileys that should return the total number of smiling faces.

// Rules for a smiling face:

// Each smiley face must contain a valid pair of eyes. Eyes can be marked as : or ;
// A smiley face can have a nose but it does not have to. Valid characters for a nose are - or ~
// Every smiling face must have a smiling mouth that should be marked with either ) or D
// No additional characters are allowed except for those mentioned.

// Valid smiley face examples: :) :D ;-D :~)
// Invalid smiley faces: ;( :> :} :]

// Example
// countSmileys([':)', ';(', ';}', ':-D']);       // should return 2;
// countSmileys([';D', ':-(', ':-)', ';~)']);     // should return 3;
// countSmileys([';]', ':[', ';*', ':$', ';-D']); // should return 1;
// Note
// In case of an empty array return 0. You will not be tested with invalid input (input will always be an array). Order of the face (eyes, nose, mouth) elements will always be the same.

// function countSmileys(arr) {
//     let eyes = [':',';'];
//     let nose = ['-', '~'];
//     let mouth = [')', 'D'];
//     let count = 0;
//     let i = 0

//     for (i = 0; i < arr.length; i++){
//         console.log(arr[i])
//         console.log(arr[i].length)
//         if (arr[i].length == 2){
//             if (eyes.includes(arr[i][0])  && mouth.includes(arr[i][1])){
//                 count += 1
//             }
//         }
//         else if (arr[i].length == 3){
//             console.log(arr[i][0]);
//             console.log(arr[i][1]);
//             console.log(arr[i][2]);
//             if (eyes.includes(arr[i][0]) && nose.includes(arr[i][1]) && mouth.includes(arr[i][2])){
//                 count += 1
//             }
//         }
        
//     }
//     return count
// }
// console.log(countSmileys([':)', ';(', ';}', ':-D']))
    
// regex version from other people's code wars solutions:

const SMILING = /[:;]{1}[-~]?[)D]{1}/;

const countSmileys = (faces) => faces.filter(face => SMILING.test(face)).length;

console.log(countSmileys([':)', ';(', ';}', ':-D']))

//practice

function countSmileys(faces){
    let smiles = (/[;|:][-|~]?[)|D]/)

    const countSmileys = faces.reduce(face => smiles.test(face)).length;
    

}
console.log(countSmileys([':)', ';(', ';}', ':-D']))