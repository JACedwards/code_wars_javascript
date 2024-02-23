function getCount(str) {
    let vowels = ['a','e','i','o','u'];
    let count = 0;
    for (let i = 0; i < str.length; i++) {
        console.log(str[i]);
        console.log(str[i].indexOf(vowels))
      if (vowels.indexOf(str[i]) != -1) {
        count = count + 1;
      }
    }
    return count;
  }



// function getCount(str) {
//     let count = 0;
//     let vowels = ['a','e','i','o','u'];
    
//     for (let i = 0; i < str.length; i++) 
//          if (vowels.includes(str[i])) {
//           count +=1
//                           }
//     return count
    
//     }

console.log(getCount("chai"));
 