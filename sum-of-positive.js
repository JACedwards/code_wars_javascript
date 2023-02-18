// You get an array of numbers, return the sum of all of the positives ones.

// Example [1,-4,7,12] => 1 + 7 + 12 = 20

// Note: if there is nothing to sum, the sum is default to 0.

function positiveSum(arr) {
  if (arr == []){
    return 0;
  }

  else{
    let sm = 0
    for (let i = 0; i < arr.length; i++){
        if (arr[i] >= 0){
            sm += arr[i];
        }
    }
    return sm;
  }
}

console.log(positiveSum([1,-4,7,12]))