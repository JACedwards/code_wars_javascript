// Happy Holidays fellow Code Warriors!
// Santa's senior gift organizer Elf developed a way to represent up to 26 gifts by assigning a unique alphabetical character to each gift. After each gift was assigned a character, the gift organizer Elf then joined the characters to form the gift ordering code.

// Santa asked his organizer to order the characters in alphabetical order, but the Elf fell asleep from consuming too much hot chocolate and candy canes! Can you help him out?

// Sort the Gift Code
// Write a function called sortGiftCode/sort_gift_code/SortGiftCode that accepts a string containing up to 26 unique alphabetical characters, and returns a string containing the same characters in alphabetical order.

// Examples (Input -- => Output):
// "abcdef"                      -- => "abcdef"
// "pqksuvy"                     -- => "kpqsuvy"
// "zyxwvutsrqponmlkjihgfedcba"  -- => "abcdefghijklmnopqrstuvwxyz"

// function sortGiftCode(code){
//     let output = code[0];
//     console.log(output)

//     for (let i = 1; i < code.length; i++) {
//         if (code[i] < output[-1]){
//             console.log(output.slice(0, -1));
//             console.log(code[i]);
//             console.log(output[-1])
//             output = `${output.slice(0, -1)}${code[i]}${output[-1]}`;
//         }else{
//             output = output + code[i];
//         }
//     }
//     return output;
//   }

// console.log(sortGiftCode("pqksuvy"))


function sortGiftCode(code){
    code = code.split('');
    let output = [code[0]];
    console.log(code[-1])

    let dict1 = {'A' : 1, 'B' : 2, 'C' : 3, 'D' : 4, 'E' : 5,
    'F' : 6, 'G' : 7, 'H' : 8, 'I' : 9, 'J' : 10,
    'K' : 11, 'L' : 12, 'M' : 13, 'N' : 14, 'O' : 15,
    'P' : 16, 'Q' : 17, 'R' : 18, 'S' : 19, 'T' : 20,
    'U' : 21, 'V' : 22, 'W' : 23, 'X' : 24, 'Y' : 25, 'Z' : 26}

    for (let i = 1; i < code.length; i++){
        console.log(code[i]);
        console.log(`output = ${output.slice(-1)}`)
        if (code[i] > output.slice(-1)){
            output.push(code[i])
        }else{
            output.splice(-2, 0, code[i]);
        }
    }
    return output.join('');
  }

console.log(sortGiftCode("pqksuvy"))



