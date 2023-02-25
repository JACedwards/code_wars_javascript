// Complete the solution so that it returns true if the first argument(string) passed in ends with the 2nd argument (also a string).

// Examples:

// solution('abc', 'bc') // returns true
// solution('abc', 'd') // returns false

// function solution(str, ending){
//     if (ending.length == 0){
//         return true
//     }
//     len = ending.length;
//     return str.slice(-len) == ending
//   }

// console.log(solution('abc','bc'))



function solution(str, ending){
    
    const regex = new RegExp(`[${ending}]$`)
    return regex.test(str)
  }

console.log(solution('abc','d'))





// const blacklist = [
//     'suspicious-domain',
//     'untrusty-site',
//     'devious-page'
// ]

// const regex = new RegExp(blacklist.join('|'), 'gi')
// const isBlacklisted = regex.test(document.location.href)