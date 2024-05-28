//A pangram is a sentence that contains every single letter of the alphabet at least once. For example, the sentence "The quick brown fox jumps over the lazy dog" is a pangram, because it uses the letters A-Z at least once (case is irrelevant).

// Given a string, detect whether or not it is a pangram. Return True if it is, False if not. Ignore numbers and punctuation.

// function isPangram(string){
//     string = string.toLowerCase();
//     let regexTest = new RegExp('[A-Za-z]');
//     let mapped = [...string].map(e => regexTest.test(e) ? e : '').filter(e => e != '').sort();
//     // console.log(mapped);
//     // console.log(regexTest);
//     let sortedSet = new Set(mapped);
//     console.log(sortedSet);
//     let setArray = Array.from(sortedSet);
//     return setArray.length == 26;
//   }
//  console.log(isPangram("The quick brown fox jumps over the lazy dog" ))


function isPangram(string){
    return new Set(
            [...string.toLowerCase()].
            filter(e => /[A-Za-z]/.
            test(e))
        ).size == 26
  }
 console.log(isPangram("The quick brown fox jumps over the lazy dog" ))