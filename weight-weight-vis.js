// "Weight for Weight
// This one is currently working if none of the numbers add up to the same value;
// Next, need to deal with issue:

// When two numbers have the same "weight", let us class them as if they were strings (alphabetical ordering) and not numbers:

// 180 is before 90 since, having the same "weight" (9), it comes before as a string.

// All numbers in the list are positive numbers and the list can be empty.

//********* */

    let sortedArrOfArrays = [
        [ 2, '2000' ],
        [ 2, '11' ],
        [ 2, '11' ],
        [ 4, '10003' ],
        [ 4, '22' ],
        [ 6, '123' ],
        [ 10, '1234000' ],
        [ 32, '44444444' ],
        [ 36, '9999' ]
      ]
     
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
  
    console.log(goober.join(' '));




  //*************************** */

// let onlyStrings = [];
// for (let k = 0; k < unsorted.length; k++) {
//     onlyStrings = unsorted[k][1]
//     console.log('onlyStrings', onlyStrings);
//   }
//   console.log(unsorted)

