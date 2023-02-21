// Write a function that takes in a string of one or more words, and returns the same string, but with all five or more letter words reversed (Just like the name of this Kata). Strings passed in will consist of only letters and spaces. Spaces will be included only when more than one word is present.

// Examples:

// spinWords( "Hey fellow warriors" ) => returns "Hey wollef sroirraw" 
// spinWords( "This is a test") => returns "This is a test" 
// spinWords( "This is another test" )=> returns "This is rehtona test"

//Psuedo:
// split
// for loop
//   check length
//     if >= 5:
//     reverse;
//     push to new list
//join new list

function spinWords(string){
    collect = []
    string = string.split(' ')
    console.log(string)
    for (let i = 0; i < string.length; i++){
        // console.log(string)
        if (string[i].length >= 5){
            let rev_string = string[i].split('').reverse();
            collect.push(rev_string.join(''));
        }
        else{
            collect.push(string[i])
        }
    }
    return collect.join(' ');
  }

  console.log(spinWords("Hey fellow warriors"))