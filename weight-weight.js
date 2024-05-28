// "Weight for Weight
// This one is currently working if none of the numbers add up to the same value;
// Next, need to deal with issue:

// When two numbers have the same "weight", let us class them as if they were strings (alphabetical ordering) and not numbers:

// 180 is before 90 since, having the same "weight" (9), it comes before as a string.

// All numbers in the list are positive numbers and the list can be empty.

function orderWeight(strng) {
    if (strng.length == 0) {
        return strng;
    }

    let arr = strng.split(' ');
    let addition = arr.map(e => [...e].reduce((a,b) => parseInt(a) + parseInt(b)));
    let comboArr = addition.map((e,i) => [e, arr[i]]);
    let sortedArrOfArrays = comboArr.sort((a,b) => a[0]-b[0]);
    console.log('sortedArrayOfArrays', sortedArrOfArrays);
     
    let r = 1;
      let l = 0;
      let multi = [];
      let unsorted = [];
  
      while (r <= sortedArrOfArrays.length-1) {
  
          if (sortedArrOfArrays[l][0] == sortedArrOfArrays[r][0]) {
              multi.push(sortedArrOfArrays[l]);
              //
              if(r == sortedArrOfArrays.length - 1) {
                  multi.push(sortedArrOfArrays[r])
                  unsorted.push([multi]);
                  r += 1
                  l += 1
              }
              else {
                  r  +=1;
                  l += 1
              }
          }
          else {
              console.log('multi at max', multi);
              if (multi.length == 0) {
                  unsorted.push([sortedArrOfArrays[r-1]]);
                  if (r == sortedArrOfArrays.length - 1) {
                    unsorted.push([sortedArrOfArrays[r]]);
                  }
                  l = r;
                  r = r+1;
              }
              else {
                  multi.push(sortedArrOfArrays[l])
                  unsorted.push(multi);
                  if (r == sortedArrOfArrays.length - 1) {
                      unsorted.push([sortedArrOfArrays[r]]);
                      r += 1;
                      l += 1;
                  }
                  multi = []
                  l = r;
                  r = r+1;
              }
          }
      }
  
      console.log('unsorted', unsorted);
  
      let onlyStrings = [];
      let sorted = []
  
      for (let k = 0; k < unsorted.length; k++) {
          onlyStrings = unsorted[k].map(e => e[1]).sort()
          console.log('onlyStrings', onlyStrings);
          sorted.push(onlyStrings);
      }
  
      console.log('sorted', sorted)
      let goober = []
      for (let l = 0; l < sorted.length; l++) {
          console.log(sorted[l])
          goober = goober.concat(sorted[l]);
      }
    return goober.join(' ');



}

console.log(orderWeight("2000 10003 1234000 44444444 9999 11 11 22 123"));
// Expected:  "11 11 2000 10003 22 123 1234000 44444444 9999"


// function createObject(keys, values) {
//     const obj = Object.fromEntries(
//         keys.map((key, index) => [key, values[index]]),
//     );
 
//     return obj;
// }
 
// let a = [1, 2, 3, 4];
// let b = ["ram", "shyam", "sita", "gita"];
// let result = createObject(a, b);
// console.log(result);