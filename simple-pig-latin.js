// Move the first letter of each word to the end of it, then add "ay" to the end of the word. Leave punctuation marks untouched.

// Examples
// pigIt('Pig latin is cool'); // igPay atinlay siay oolcay
// pigIt('Hello world !');     // elloHay orldway !

//Psuedo:
//split
//for loop:
//  if not alpha, don't change (else)
//   move index 0 to end
//   concat 'ay'
//   push to new list


function pigIt(str){
    str = str.split(' ')
    output = []
    for (let i = 0; i < str.length; i++){
        if (!str[i].match(/^[0-9a-zA-Z]+$/)){
            output.push(str[i])
        }
        else {
            output.push(
                `${str[i].slice(1)}${str[i][0]}ay`
            )
        }
    }
    return output.join(' ')
  }


console.log(pigIt('Hello world !'))