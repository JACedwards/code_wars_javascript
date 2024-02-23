// Consider the word "abode". We can see that the letter a is in position 1 and b is in position 2. In the alphabet, a and b are also in positions 1 and 2. Notice also that d and e in abode occupy the positions they would occupy in the alphabet, which are positions 4 and 5.

// Given an array of words, return an array of the number of letters that occupy their positions in the alphabet for each word. For example,

// solve(["abode","ABc","xyzD"]) = [4, 3, 1]
// See test cases for more examples.

// Input will consist of alphabet characters, both uppercase and lowercase. No spaces.


function solve(arr){  
    let dict = {'A' : 1, 'B' : 2, 'C' : 3, 'D' : 4, 'E' : 5,'F' : 6, 'G' : 7, 'H' : 8, 'I' : 9, 'J' : 10,'K' : 11, 'L' : 12, 'M' : 13, 'N' : 14, 'O' : 15,'P' : 16, 'Q' : 17, 'R' : 18, 'S' : 19, 'T' : 20,'U' : 21, 'V' : 22, 'W' : 23, 'X' : 24, 'Y' : 25, 'Z' : 26}
  
     

    // let count = 0;
    // let output = [];
    // let letter = ''
    // console.log(dict['A']);
    // position = 1;
    return arr.map(s => s.toUpperCase().split('').filter((c, i) => i + 1 === dict[c]).length)


};

console.log(solve(["abode","ABc","xyzD"]))

// function solve(arr){  
//     let dict = {'A' : 1, 'B' : 2, 'C' : 3, 'D' : 4, 'E' : 5,'F' : 6, 'G' : 7, 'H' : 8, 'I' : 9, 'J' : 10,'K' : 11, 'L' : 12, 'M' : 13, 'N' : 14, 'O' : 15,'P' : 16, 'Q' : 17, 'R' : 18, 'S' : 19, 'T' : 20,'U' : 21, 'V' : 22, 'W' : 23, 'X' : 24, 'Y' : 25, 'Z' : 26}

//     let count = 0;
//     let output = [];
//     let letter = ''
//     console.log(dict['A']);
//     position = 1;

//     return arr.map(x )
//     for (let i = 0; i < arr.length; i++){
        
//         for (let j = 0; j < arr[i].length; j++) {

//             if ( position == dict[arr[i][j].toUpperCase()]){
//                 count += 1
//             }
//             position +=1
//         } 
        
//         output.push(count);
//         count = 0;
//         position = 1

//     }
//     return output

// };

// console.log(solve(["abode","ABc","xyzD"]))


