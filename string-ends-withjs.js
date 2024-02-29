// function solution(str, ending){

//     console.log(str.length);
//     console.log(ending.length);
//     console.log('three is less than four', 3 <= 4);
//     if (str.length <= ending.length) {
//         console.log('hitting if block');
//         return str.length - ending.length === str.indexOf(ending)
//     }
// }

// console.log(solution('abc', 'abcd'))

// lenght 3 index 1
// length 2 

//Expected solution('abc', 'abcd') to return false: expected true to equal false

// function solution(str, ending){

        // if (str.indexOf(ending) == -1) {
        //     return false
        // }

//         else return str.length - ending.length === str.indexOf(ending);
//     }

// console.log(solution('abc', 'bc'))

// Complete the solution so that it returns true if the first argument(string) passed in ends with the 2nd argument (also a string).
// Test.assertEquals(solution('abc', 'bc'), true)

// function solution(str, ending){

//     if (str.slice(str.length - ending.length === ending)) {
//         return true
//     }

//     else if (str.indexOf(ending) == -1) {
//             return false
//     }
//     return str.slice(str.indexOf(ending)) == ending;

// }

// // console.log(solution('abc', 'bc'))
// console.log(solution('abc', 'abcd'));
// // console.log(solution('abcabc', 'bc'))
//6-2 = 4


function solution(str, ending){

    if (str.indexOf(ending) == -1) {
            return false
    }

    else if (str.slice(str.length - ending.length === ending)) {
        return true
    }
    return str.slice(str.indexOf(ending)) == ending;

}

console.log(solution('abc', 'bc'))
console.log(solution('abc', 'abcd'));
console.log(solution('abcabc', 'bc'))