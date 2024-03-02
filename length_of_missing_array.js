// You get an array of arrays.
// If you sort the arrays by their length, you will see, that their length-values are consecutive.
// But one array is missing!


// You have to write a method, that return the length of the missing array.

// Example:
// [[1, 2], [4, 5, 1, 1], [1], [5, 6, 7, 8, 9]] --> 3

// If the array of arrays is null/nil or empty, the method should return 0.

// When an array in the array is null or empty, the method should return 0 too!
// There will always be a missing element and its length will be always between the given arrays.

function getLengthOfMissingArray(arrayOfArrays) {
    if (arrayOfArrays.length === 0){
        return 0;
    }

    

    let goober = [];
    goober = arrayOfArrays.map(e => e = e.length);

    if (goober.includes(0)){
        return 0
    }
    goober.sort((a,b) => a-b)
    console.log(goober);

    let l = 0;
    let r = 1;
    while (r < goober.length){
        if (goober[l] != goober[r] - 1){
             return goober[l] + 1;
        }
        l+=1;
        r +=1;
      }
  }


console.log(getLengthOfMissingArray([[1, 2], [4, 5, 1, 1], [1], [5, 6, 7, 8, 9]]))
  