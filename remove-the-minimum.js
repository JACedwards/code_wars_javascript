// The museum of incredible dull things
// The museum of incredible dull things wants to get rid of some exhibitions. Miriam, the interior architect, comes up with a plan to remove the most boring exhibitions. She gives them a rating, and then removes the one with the lowest rating.

// However, just as she finished rating all exhibitions, she's off to an important fair, so she asks you to write a program that tells her the ratings of the items after one removed the lowest one. Fair enough.

// Task
// Given an array of integers, remove the smallest value. Do not mutate the original array/list. If there are multiple elements with the same value, remove the one with a lower index. If you get an empty array/list, return an empty array/list.

// Don't change the order of the elements that are left.

// Examples
// * Input: [1,2,3,4,5], output = [2,3,4,5]
// * Input: [5,3,2,1,4], output = [5,3,2,4]
// * Input: [2,2,1,2,1], output = [2,2,2,1]

// function removeSmallest(numbers) {
//     let min = numbers[0];
//     let output = []
//     for (let i = 1; i < numbers.length; i++){
//         if (numbers[i] < min){
//             min = numbers[i]
//         }
//      }
//      let findInd =  (e) => e == min;
//      ind = numbers.findIndex(findInd);
//      numbers.splice(ind,1)
//      return numbers
// }

// console.log(removeSmallest([5,3,2,1,4]))

// arrayOfLetters.slice(0, n).concat(arrayOfLetters.slice(n+1))

function removeSmallest(numbers) {
    let min = numbers[0];
    let output = []
    for (let i = 1; i < numbers.length; i++){
        if (numbers[i] < min){
            min = numbers[i]
        }
     }
     let findInd =  (e) => e == min;
     ind = numbers.findIndex(findInd);
     output = numbers.slice(0,ind).concat(numbers.slice(ind+1))
     
     return output
}

console.log(removeSmallest([2,2,1,2,1]))

// from code wars:
// const removeSmallest = numbers => numbers.filter((n,i) => i !== numbers.indexOf(Math.min(...numbers)));
