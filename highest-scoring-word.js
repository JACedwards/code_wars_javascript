// Given a string of words, you need to find the highest scoring word.

// Each letter of a word scores points according to its position in the alphabet: a = 1, b = 2, c = 3 etc.

// For example, the score of abad is 8 (1 + 2 + 1 + 4).

// You need to return the highest scoring word as a string.

// If two words score the same, return the word that appears earliest in the original string.

// All letters will be lowercase and all inputs will be valid.

// let dict1 = {'A' : 1, 'B' : 2, 'C' : 3, 'D' : 4, 'E' : 5,
// 'F' : 6, 'G' : 7, 'H' : 8, 'I' : 9, 'J' : 10,
// 'K' : 11, 'L' : 12, 'M' : 13, 'N' : 14, 'O' : 15,
// 'P' : 16, 'Q' : 17, 'R' : 18, 'S' : 19, 'T' : 20,
// 'U' : 21, 'V' : 22, 'W' : 23, 'X' : 24, 'Y' : 25, 'Z' : 26}

// unicode:
// function findMissingLetter(array){
      
//     let uni_number = array.charCodeAt(0); 
//     console.log(uni_number);
//         //97 is unicode number for "a" which is at index 0 of array
//     let alpha_from_uni = String.fromCharCode(97);
//     console.log(alpha_from_uni);
//         // alphabetical character for unicode number 97 = 'a'
//     }

// console.log(findMissingLetter('abcef'))

    //-96

// function high(x){
//     x = x.split(' ');
//     // console.log(x[0].charCodeAt(0)); // 109 (value of "m")
//     let find_uni = 0
//     let sm = 0
//     let sm_n_word = [0,'']

//     for (let i = 0; i < x.length; i++){
//         console.log(x[i]) 
//         // ('man i need a taxi up to ubud')
//         // console.log(x[i][j])
//         for(let j = 0; j < x[i].length; j++){
//             console.log(`this is x[i][j]:  ${x[i][j]}`)
//             find_uni = x[i].charCodeAt(j)
//             // console.log(find_uni)
//             sm = sm += find_uni
//         // }
//         }
//         console.log(`this is sm: ${sm}`)
//         if (sm > sm_n_word[0]){
//             sm_n_word[0] = sm;
//             sm_n_word[1] = x[i]
//         }
//         sm = 0
//     }

//     return sm_n_word[1]
// }


// console.log(high('man i need a taxi up to ubud'))  //taxi

// function high(x){
//     x.split(' ');
//     console.log(`this is x split ${x}`)
//     let goober = x[0].split();
//     console.log(`This is goober: ${goober}`)
//     console.log(x[0].charCodeAt(0)); // 109 (value of "m")
//     let find_uni = 0
//     let sm = 0
//     let sm_n_word = [0,'']
//     let dict1 = {'A' : 1, 'B' : 2, 'C' : 3, 'D' : 4, 'E' : 5,
//         'F' : 6, 'G' : 7, 'H' : 8, 'I' : 9, 'J' : 10,
//         'K' : 11, 'L' : 12, 'M' : 13, 'N' : 14, 'O' : 15,
//         'P' : 16, 'Q' : 17, 'R' : 18, 'S' : 19, 'T' : 20,
//         'U' : 21, 'V' : 22, 'W' : 23, 'X' : 24, 'Y' : 25, 'Z' : 26}
    
//     goober = []
//     for (let i = 0; i < x.length; i++){
//         // console.log(x[i])
//         console.log(x[i].split('')) 
//         // ('man i need a taxi up to ubud')
       
//         // console.log(`This is dictionary value ${dict1[x[i][0].toUpperCase()]} for this letter ${[x[i][0].toUpperCase()]} `)
//         // console.log(`this is the split x[i]: ${x[i].split('')}`)
//         // console.log(`this is the value of m: ${dict1[x[i][0]]}`)
//         // console.log(`this is the value of a: ${dict1[x[i][1]]}`)
//         // console.log(`this is the value of n: ${dict1[x[i][2]]}`)
        

//         // let sm = x[i].split().reduce((d, e) => dict1[d] + dict1[e])
//         // console.log(`THIS IS THE SUM: ${sm}`)

//         // let summation = numbers.reduce(
//         //     (accumulator, currentValue) => accumulator + currentValue
//         //   );
//         // for(let j = 0; j < x[i].length; j++){
//         //     console.log(`this is x[i][j]:  ${x[i][j]}`)
//         //     find_uni = x[i].charCodeAt(j)
//         //     // console.log(find_uni)
//         //     sm = sm += find_uni
//         // // }
//         // }
//         // console.log(`this is sm: ${sm}`)
//         // if (sm > sm_n_word[0]){
//         //     sm_n_word[0] = sm;
//         //     sm_n_word[1] = x[i]
//         // }
//         // sm = 0
//     }

//     // return sm_n_word[1]
// }


// console.log(high('MAN I NEED A TAXI UP TO UBUD'))  //taxi








// function high(x){
        
//         // console.log(x[0].charCodeAt(0)); // 109 (value of "m")
        
//         let find_uni = 0
//         let sm = 0
//         let sm_n_word = [0,'']
    
//         for (let i = 0; i < x.length; i++){
//             console.log(x[i]) 
//             // ('man i need a taxi up to ubud')
//             // console.log(x[i][j])
//             for(let j = 0; j < x[i].length; j++){
//                 console.log(`this is x[i][j]:  ${x[i][j]}`)
//                 find_uni = x[i].charCodeAt(j)
//                 // console.log(find_uni)
//                 sm = sm += find_uni
//             // }
//             }
//             console.log(`this is sm: ${sm}`)
//             if (sm > sm_n_word[0]){
//                 sm_n_word[0] = sm;
//                 sm_n_word[1] = x[i]
//             }
//             sm = 0
//         }
    
//         return sm_n_word[1]
//     }
    
    
    // console.log(high(['man', 'i', 'need', 'a', 'taxi', 'up', 'to', 'ubud']))  //taxi


    function high(x){
       
        let sm = 0
        let dict1 = {'A' : 1, 'B' : 2, 'C' : 3, 'D' : 4, 'E' : 5,
            'F' : 6, 'G' : 7, 'H' : 8, 'I' : 9, 'J' : 10,
            'K' : 11, 'L' : 12, 'M' : 13, 'N' : 14, 'O' : 15,
            'P' : 16, 'Q' : 17, 'R' : 18, 'S' : 19, 'T' : 20,
            'U' : 21, 'V' : 22, 'W' : 23, 'X' : 24, 'Y' : 25, 'Z' : 26}
        

        // for (let i = 0; i < x.length; i++){
            // console.log(x[i])
            // ('man i need a taxi up to ubud')
           
            // console.log(`This is dictionary value ${dict1[x[i][0].toUpperCase()]} for this letter ${[x[i][0].toUpperCase()]} `)
            // console.log(`this is the split x[i]: ${x[i].split('')}`)
            // console.log(`this is the value of m: ${dict1[x[i][0]]}`)
            // console.log(`this is the value of a: ${dict1[x[i][1]]}`)
            // console.log(`this is the value of n: ${dict1[x[i][2]]}`)
            
        console.log(x);
        
            sm = x.reduce((d, e) => d + e)
            console.log(`THIS IS THE SUM: ${sm}`)
    
            // let summation = numbers.reduce(
            //     (accumulator, currentValue) => accumulator + currentValue
            //   );
            // for(let j = 0; j < x[i].length; j++){
            //     console.log(`this is x[i][j]:  ${x[i][j]}`)
            //     find_uni = x[i].charCodeAt(j)
            //     // console.log(find_uni)
            //     sm = sm += find_uni
            // // }
            // }
            // console.log(`this is sm: ${sm}`)
            // if (sm > sm_n_word[0]){
            //     sm_n_word[0] = sm;
            //     sm_n_word[1] = x[i]
            // }
            // sm = 0
        }
    
        // return sm_n_word[1]
    
    
    
    console.log(high([1, 2,3]))  //taxi
