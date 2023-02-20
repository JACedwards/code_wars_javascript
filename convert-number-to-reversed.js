// Convert number to reversed array of digits
// Given a random non-negative number, you have to return the digits of this number within an array in reverse order.

// Example(Input => Output):
// 35231 => [1,3,2,5,3]
// 0 => [0]

function digitize(n) {

    let arr = n.toString().split("").reverse();
    return arr.map(i => parseInt(i));

}

console.log(digitize(35231))


// function digitize(n) {
//     let str = '';
//     str = n.toString();
//     let arr = str.split("");
//     console.log(arr);
//     arr.reverse();
//     let output = []
//     for (let i=0; i < arr.length; i++){
//         output.push(parseInt(arr[i]));
    
//     }
//     return output;
// }

// console.log(digitize(35231))

// let text = "35231";
// const myArray = text.split("");
// console.log(myArray)