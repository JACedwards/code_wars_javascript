// Complete the solution so that it reverses the string passed into it.

// 'world'  =>  'dlrow'
// 'word'   =>  'drow'

//Vesion 1:  built-in functions

// function solution(str){
//   let splitString = str.split("");
//   let reverseArray = splitString.reverse();
//   let joinArray = reverseArray.join('');
//   return joinArray;

// }

// console.log(solution('hello'))



//version 2:  for loop

function solution(str){
    let newString = '';
    for (let i = str.length - 1; i >= 0; i--) {
        newString += str[i];
    }
    return newString;
  
  }
  
  console.log(solution('hello'))

//   function reverseString(str) {
//     // Step 1. Create an empty string that will host the new created string
//     var newString = "";
 
//     // Step 2. Create the FOR loop
//     /* The starting point of the loop will be (str.length - 1) which corresponds to the 
//        last character of the string, "o"
//        As long as i is greater than or equals 0, the loop will go on
//        We decrement i after each iteration */
//     for (var i = str.length - 1; i >= 0; i--) { 
//         newString += str[i]; // or newString = newString + str[i];
//     }
//     /* Here hello's length equals 5
//         For each iteration: i = str.length - 1 and newString = newString + str[i]
//         First iteration:    i = 5 - 1 = 4,         newString = "" + "o" = "o"
//         Second iteration:   i = 4 - 1 = 3,         newString = "o" + "l" = "ol"
//         Third iteration:    i = 3 - 1 = 2,         newString = "ol" + "l" = "oll"
//         Fourth iteration:   i = 2 - 1 = 1,         newString = "oll" + "e" = "olle"
//         Fifth iteration:    i = 1 - 1 = 0,         newString = "olle" + "h" = "olleh"
//     End of the FOR Loop*/
 
//     // Step 3. Return the reversed string
//     return newString; // "olleh"
// }
 
// reverseString('hello');