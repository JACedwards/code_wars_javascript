// Your task is to sort a given string. Each word in the string will contain a single number. This number is the position the word should have in the result.

// Note: Numbers can be from 1 to 9. So 1 will be the first word (not 0).

// If the words string is empty, return an empty string. The words in the words String will only contain valid consecutive numbers.

// Examples
// "is2 Thi1s T4est 3a"  -->  "Thi1s is2 3a T4est"
// "4of Fo1r pe6ople g3ood th5e the2"  -->  "Fo1r the2 g3ood 4of th5e pe6ople"
// ""  -->  ""


//Pseudo:
//  split string
//  (stor length of this string in variable for later)
// loop thru list of strings:
//  checking each character to see if it is string rep of a number
//  if so,
//     add to dictionary with key as the number and string as its value
//  for loop with length same as what stored above:
//     push value of key at i into output list (NOTE that i should start at 1 because there will be no word with 0 value)


function order(words){
  words=words.split(' ');

  let arr = []
  let dct = {}

  for (let i = 0; i < words.length; i++){
    arr = words[i].split('');  //  [ 'i', 's', '2' ]
    // console.log(arr)
    for (let k = 0; k < arr.length; k ++){
      // console.log(arr[k])
      if (/[0-9]/.test(arr[k])){
          dct[parseInt(arr[k])] = arr.join('');
      }

  }

  output = []
  let st = ''
  for (let x = 1; x < words.length + 1; x+=1){
    st = x.toString()
    output.push(dct[st])

    
  }

  }
  return output.join(' ')
  }

console.log(order("is2 Thi1s T4est 3a"))