// Filter the number
// Oh, no! The number has been mixed up with the text. Your goal is to retrieve the number from the text, can you return the number back to its original state?

// Task
// Your task is to return a number from a string.

// Details
// You will be given a string of numbers and letters mixed up, you have to return all the numbers in that string in the order they occur.

// STRINGSFUNDAMENTALS

var filterString = function(value) {
    value = value.split('')
    let output = [];
    let dig = ['1','2','3','4','5','6','7','8','9','0']
    for (let i = 0; i < value.length; i++)
        if (dig.includes(value[i])){
            output.push(value[i]);
        }
    return parseInt(output.join(''));
  }

console.log(filterString("a1b2c3"))

// Regex:

const FilterString = value => +value.replace(/\D/g, '');
