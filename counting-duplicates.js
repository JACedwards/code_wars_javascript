// Write a function that will return the count of distinct case-insensitive alphabetic characters and numeric digits that occur more than once in the input string. The input string can be assumed to contain only alphabets (both uppercase and lowercase) and numeric digits.

// Example
// "abcde" -> 0 # no characters repeats more than once
// "aabbcde" -> 2 # 'a' and 'b'
// "aabBcde" -> 2 # 'a' occurs twice and 'b' twice (`b` and `B`)
// "indivisibility" -> 1 # 'i' occurs six times
// "Indivisibilities" -> 2 # 'i' occurs seven times and 's' occurs twice
// "aA11" -> 2 # 'a' and '1'
// "ABBA" -> 2 # 'A' and 'B' each occur twice

//Pseudo:
//  create set
//  create list version of set
//  split input string into array
//  iterate through set_list checking count of each set_list element in original split array using filter






function duplicateCount(text){
    text = text.toLowerCase()
    text = text.split('')
    // console.log(text)
    let set = new Set(text)
    // console.log(set)
    
    let set_list = Array.from(set);
    // console.log(set_list)
    let check_num = 0
    let count = 0
    for (let i = 0; i < set_list.length; i++){
        check_num = text.filter(e => e == set_list[i]).length
        if (check_num > 1) {
            count += 1
        }
    } 

    return count

   
  
}

console.log(duplicateCount("aA11"))





// function duplicateCount(text){
//     text = text.toLowerCase()
//     console.log(text.includes('a'))
//     let len = text.length
//     while (len >=1){
//     check_char = text[0];
//     console.log(check_char);
//     console.log(typeof(check_char))
//     console.log(text.includes(check_char))
//     console.log(text.slice(1))

//     goober = text.slice(1)
//     console.log(`this is goober ${goober}`)
//     console.log(goober.includes(check_char))
// //         
//     // if (text.slice(1).include(check_char)){
//     //     console.log(`this is text.slice(1).toLowerCase : ${text.slice(1).toLowerCase()} and this is text[0]: ${text[0]}`)
//     //     count++
//     // }
// //         text.replaceAll(check_char, '')
// //         len = text.length
// //   }
// //   return count
// }

// console.log(duplicateCount("aA11"))