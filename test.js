function findMissingLetter(array){
  array = array.join('');
  let first = array.charCodeAt(0);
  console.log(first);
  let second = 1;
  
  for (let i = 1; i < array.length; i++) {
      second = array.charCodeAt(i)
      if (second != first+1){
          return String.fromCharCode(first+1);
      }
      first+=1
  }


// console.log(`The character code ${array.charCodeAt(index)} is equal to ${array.charAt(index)}`);
// //   return array.charCodeAt(0);
}

console.log(findMissingLetter(['a','b','c','d','f']))


function findMissingLetter(array){
  str = 'abcdf';

  let uni_number = array.charCodeAt(0); 
      //97 is unicode number for "a" which is at index 0 of str
  let alpha_from_uni = String.fromCharCode(97);
      // alphabetical character for unicode number 97 = 'a'
      if (second != first+1){
          return String.fromCharCode(first+1);
      }
      first+=1
  }