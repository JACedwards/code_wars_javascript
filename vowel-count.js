// Return the number (count) of vowels in the given string.

// We will consider a, e, i, o, u as vowels for this Kata (but not y).

// The input string will only consist of lower case letters and/or spaces.

function getCount(str) {
    let vowel = ['a','e','i','o','u']
    let count = 0
    str.split('').forEach(e => vowel.includes(e) ? count+=1 : count = count)
    return count
  }

console.log(getCount("abracadabra"))

function getCount(str) {
    return str.split('').filter(c => "aeiouAEIOU".includes(c)).length;
   }

   console.log(getCount("abracadabra"))