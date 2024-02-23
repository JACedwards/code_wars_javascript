// Everyone knows passphrases. One can choose passphrases from poems, songs, movies names and so on but frequently they can be guessed due to common cultural references. You can get your passphrases stronger by different means. One is the following:

// choose a text in capital letters including or not digits and non alphabetic characters,

// shift each letter by a given number but the transformed letter must be a letter (circular shift),
// replace each digit by its complement to 9,
// keep such as non alphabetic and non digit characters,
// downcase each letter in odd position, upcase each letter in even position (the first character is in position 0),
// reverse the whole result.
// Example:
// your text: "BORN IN 2015!", shift 1

// 1 + 2 + 3 -> "CPSO JO 7984!"

// 4 "CpSo jO 7984!"

// 5 "!4897 Oj oSpC"

// With longer passphrases it's better to have a small and easy program. Would you write it?

// program to find the ASCII value of a character

// take input from the user
// const string = prompt('Enter a character: ');

// // convert into ASCII value
// const result = string.charCodeAt(0);

// function playPass(s, n) {

    
//     let ascii = 0;
//     let char = '';
//     let num = 0
//     let output = [];
//     let output_camel = [];

//     // let char = String.fromCharCode(65);

//     for (let i = 0; i < s.length; i++)
//         if (/[A-Za-z]/.test(s[i])) {
//             ascii = s.charCodeAt(i);
//             char = String.fromCharCode(ascii + n);
//             output.push(char);
            
//         }
//         else if (/[0-9]/.test(s[i])) {
//             num = 9 - s[i];
//             output.push(num);
//         }
//         else {
//             output.push(s[i]);
//         }

//     for (let j = 0; j < output.length ; j++){
//         if (/[A-Za-z]/.test(output[j])) {
//             if (j % 2 == 0){
//                 output_camel.push(output[j].toUpperCase())
//             }
//             else {
//                 output_camel.push(output[j].toLowerCase())
//             }
           
//         }
//         else {
//             output_camel.push(output[j]);
//         }
//     }

    
//     return output_camel.reverse().join('');
// }
// console.log(playPass("BORN IN 2015!", 1));

function playPass(s, n) {

    
    let ascii = 0;
    let char = '';
    let num = 0
    let output = [];
    let output_camel = [];

    // let char = String.fromCharCode(65);

    for (let i = 0; i < s.length; i++)
        if (/[A-Za-z]/.test(s[i])) {
            ascii = s.charCodeAt(i);
            char = String.fromCharCode(ascii + n);
            if (i % 2 == 0) {
                output.push(char.toUpperCase())
            }
            else {
                output.push(char.toLowerCase());
            }
        }
        else if (/[0-9]/.test(s[i])) {
            num = 9 - s[i];
            output.push(num);
        }
        else {
            output.push(s[i]);
        }

    console.log(output);
    return output.reverse().join('');
}
console.log(playPass("BORN IN 2015!", 1));