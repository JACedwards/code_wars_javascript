// Given a mixed array of number and string representations of integers, add up the non-string integers and subtract the total of the string integers.

// Return as a number.

// function divCon(x){
//     int =  x.filter(e => Number.isInteger(e)).reduce((a,b) => a + b, 0);
//     str =  x.filter(e => !Number.isInteger(e)).reduce((c,d) => c + parseInt(d),0);
//     return int-str;

// }

// console.log(divCon([9, 3, '7', '3']))



function divCon(x){
    return x.reduce((a,b) => Number.isInteger(b) ? a + b : a - b, 0);

}

console.log(divCon([9, 3, '7', '3']))