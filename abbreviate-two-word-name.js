// Write a function to convert a name into initials. This kata strictly takes two words with one space in between them.

// The output should be two capital letters with a dot separating them.

// It should look like this:

// Sam Harris => S.H

// patrick feeney => P.F

// function abbrevName(name){

//     name = name.split(' ')
//     console.log(name)
//     return `${name[0][0].toUpperCase()}.${name[1][0].toUpperCase()}`

// }

// console.log(abbrevName("Sam Harris"))

// function abbrevName(name){
//     let space = name.indexOf(' ')

//     return `${name[0].toUpperCase()}.${name[space+1].toUpperCase()}`

// }

// console.log(abbrevName("Sam Harris"))


function abbrevName(name){
    
    return  output = name.split(' ').map(i => i[0].toUpperCase()).join('.');

}

console.log(abbrevName("Sam Harris"))

// const numbers = [4, 9, 16, 25];
// const newArr = numbers.map(Math.sqrt)