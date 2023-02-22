// The maximum sum subarray problem consists in finding the maximum sum of a contiguous subsequence in an array or list of integers:

// maxSequence([-2, 1, -3, 4, -1, 2, 1, -5, 4])
// // should be 6: [4, -1, 2, 1]
// Easy case is when the list is made up of only positive numbers and the maximum sum is the sum of the whole array. If the list is made up of only negative numbers, return 0 instead.

// Empty list is considered to have zero greatest sum. Note that the empty list or array is also a valid sublist/subarray.


var maxSequence = function(arr){
    let tempSum = 0
    let maxSum = 0
    for (let l = 0; l < arr.length; l++){
        tempSum = arr[l]
        if (tempSum > maxSum) {
            maxSum = tempSum;
        }
        for (let r = l+1; r < arr.length; r++) {
            tempSum = tempSum += arr[r]
            if (tempSum > maxSum) {
                maxSum = tempSum;
            }
        
        }
        tempSum = 0
    }
    return maxSum
  }


console.log(maxSequence([-2, 1, -3, 4, -1, 2, 1, -5, 4]))