// Implement the function unique_in_order which takes as argument a sequence and returns a list of items without any elements with the same value next to each other and preserving the original order of elements.

// For example:

// uniqueInOrder('AAAABBBCCDAABBB') == ['A', 'B', 'C', 'D', 'A', 'B']
// uniqueInOrder('ABBCcAD')         == ['A', 'B', 'C', 'c', 'A', 'D']
// uniqueInOrder([1,2,2,3,3])       == [1,2,3]

// var uniqueInOrder=function(iterable){
//     let output = []

//     for (let i = 0; i < iterable.length; i++) {

//         if (output.slice(-1) != iterable[i]) {
//             output.push(iterable[i])
//         }
//     }
//     return output
// }

// console.log(uniqueInOrder('AAAABBBCCDAABBB'))



var uniqueInOrder=function(iterable){
    if (typeof iterable === 'string') {
        iterable = iterable.split('');
        console.log(iterable)
    }
    
    return iterable.filter((e,i) => e  !== iterable[i-1])
}

console.log(uniqueInOrder('AAAABBBCCDAABBB'))  // [ 'A', 'B', 'C', 'D', 'A', 'B' ]

// var uniqueInOrder=function(iterable){
//     return [...iterable].filter((a, i) => a !== iterable[i-1])
// }