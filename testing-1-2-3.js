// Your team is writing a fancy new text editor and you've been tasked with implementing the line numbering.

// Write a function which takes a list of strings and returns each line prepended by the correct number.

// The numbering starts at 1. The format is n: string. Notice the colon and space in between.

// Examples: (Input --> Output)

// [] --> []
// ["a", "b", "c"] --> ["1: a", "2: b", "3: c"]


// var number=function(array){
//     let alpha_dct = {'a':1, 'b':2, 'c':3, 'd':4, 'e':5, 'f':6, 'g':7, 'h':8, 'i':9, 'j':10, 'k':11, 'l':12, 'm':13, 'n':14, 'o':15, 'p':16,  'q':17, 'r':18, 's':19, 't':20, 'u':21, 'v':22, 'w':23, 'x':24, 'y':25,  'z':26}

//     let output = []
//     for (let i = 1; i < array.length + 1; i++){
//         output.push(`${i}: ${array[i-1]}`)
//     }
//     return output
//   }

//   console.log(number(["a", "b", "c"]))

//  map version with submission help:

let number = (a) => a.map((c,i) => `${i+1}: ${c}`)

console.log(number(["a", "b", "c"]))
