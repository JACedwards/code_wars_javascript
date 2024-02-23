// Take an integer n (n >= 0) and a digit d (0 <= d <= 9) as an integer.

// Square all numbers k (0 <= k <= n) between 0 and n.

// Count the numbers of digits d used in the writing of all the k**2.

// Implement the function taking n and d as parameters and returning this count.

// Examples:
// n = 10, d = 1 
// the k*k are 0, 1, 4, 9, 16, 25, 36, 49, 64, 81, 100
// We are using the digit 1 in: 1, 16, 81, 100. The total count is then 4.

// The function, when given n = 25 and d = 1 as argument, should return 11 since
// the k*k that contain the digit 1 are:
// 1, 16, 81, 100, 121, 144, 169, 196, 361, 441.
// So there are 11 digits 1 for the squares of numbers between 0 and 25.

//psuedo:
//  create list of squares of every number between 1 and n (inclusive);
//  split each number and count '1' strings.
//  (try regex);

// function nbDig(n, d) {
//     let sqs = [];
//     for (let i = 1; i <= n; i++){
//         let square = i * i;
//         sqs.push(square.toString())
//     }
//     // console.log(sqs);
//     // [
//     //     '1',   '4',  '9',
//     //     '16',  '25', '36',
//     //     '49',  '64', '81',
//     //     '100'
//     //   ]

    
//     let count = 0;
//     let goober = ''
//     for (let j = 0; j < sqs.length; j++){
//         goober = sqs[j].split();
//         // console.log(`this is goober ${goober}`)
//         for (let k = 0; k < goober.length; k++){
//             // console.log(`this is goober[k] ${goober[k]}`);
//             for (let m = 0; m < goober[k].length; m++)
//             if (goober[k][m] == d.toString()){
//                 count += 1;
//             }
//         }    
//     }
//     return count
// }

// console.log(nbDig(25,1));



// function nbDig(n, d) {
//     let sqs = [];
//     for (let i = 1; i <= n; i++){
//         let square = i * i;
//         sqs.push(square.toString())
//     }
//     jn = sqs.join('');
//     return jn.split(d).length - 1
// }

// console.log(nbDig(25,1));

// function nbDig(n, d) {
//     let sqs = '';
//     for (let i = 1; i <= n; i++){
//         let square = i * i;
//         sqs = sqs + square;
//     }
    
//     return sqs.split(d).length - 1
// }

// console.log(nbDig(25,1));



// function nbDig(n, d) {
//     let sqs = '';
//     for (let i = 1; i <= n; i++){
//         let square = i * i;
//         sqs = sqs + square;
//     }
    
//     return d == 0 ? sqs.split(d).length : sqs.split(d).length - 1;
// }

// console.log(nbDig(25,1));

function nbDig(n, d) {
    let sqs = '';
    for (let i = 1; i <= n; i++){
        let square = i * i;
        sqs = sqs + square;
    }

    re = new RegExp(d, 'g')

    
    return d == 0 ? sqs.match(re).length + 1 : sqs.match(re).length;
}

console.log(nbDig(25,1));


