// The marketing team is spending way too much time typing in hashtags.
// Let's help them with our own Hashtag Generator!

// Here's the deal:

// It must start with a hashtag (#).
// All words must have their first letter capitalized.
// If the final result is longer than 140 chars it must return false.
// If the input or the result is an empty string it must return false.
// Examples
// " Hello there thanks for trying my Kata"  =>  "#HelloThereThanksForTryingMyKata"
// "    Hello     World   "                  =>  "#HelloWorld"
// ""                                        =>  false

//Pseudo:
//   if input empty: return false
//   use reduce to strip spaces:
//      if result = empty string (length):  return false
//      if result + 1 (for #) is more than 140 in length: return false
//  split original string:
//     map first letter of every word as toUpperCase()
//     join
//     add hashtag

function generateHashtag (str) {

    let no_space = str.replaceAll(' ','');
    if (no_space.length == 0 || no_space.length >= 140){
        return false;
    }

    else {
        str = str.split(' ');
        console.log(str)
        let str_lst = str.filter(word => word != '');
        str_lst_upper = str_lst.map(titled => 
            titled.charAt(0).toUpperCase() + titled.slice(1))
        return `#${str_lst_upper.join('')}`
    }

}

console.log(generateHashtag("   Hello    World  "))