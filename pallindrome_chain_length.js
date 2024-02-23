// Number is a palindrome if it is equal to the number with digits in reversed order. For example, 5, 44, 171, 4884 are palindromes, and 43, 194, 4773 are not.

// Write a function which takes a positive integer and returns the number of special steps needed to obtain a palindrome. The special step is: "reverse the digits, and add to the original number". If the resulting number is not a palindrome, repeat the procedure with the sum until the resulting number is a palindrome.

// If the input number is already a palindrome, the number of steps is 0.

// All inputs are guaranteed to have a final palindrome which does not overflow MAX_SAFE_INTEGER.

// Example
// For example, start with 87:

//   87 +   78 =  165     - step 1, not a palindrome
//  165 +  561 =  726     - step 2, not a palindrome
//  726 +  627 = 1353     - step 3, not a palindrome
// 1353 + 3531 = 4884     - step 4, palindrome!
// 4884 is a palindrome and we needed 4 steps to obtain it, so answer for 87 is 4.

// Additional info
// Some interesting information on the problem can be found in this Wikipedia article on Lychrel numbers.

var palindromeChainLength = function(n) {


    if (n.toString().length == 1){
        return 0
    }

    if (parseInt(n.toString().split('').reverse().join('')) == n) {
        return 0
    }

    
    let flag = true;
    let steps = 1;
    let n_arr = [];
    let rev = [];
    let sum = 0;
    let sum_str = '';
    let sum_arr = [];
    let sum_str_rev = '';





    while (flag == true) {
        // calculating sum of n + n reversed
        n_arr = n.toString().split('');
        rev = n_arr.reverse();
        n_arr = n_arr.join('');
        sum = n + parseInt(n_arr);
        console.log(sum);
        console.log(typeof sum);  // 165

        //checking if sum is a pallandrome
        sum_str = sum.toString();
        sum_arr = sum_str.split('')
        // console.log(sum_str);
        sum_str_rev = sum_arr.reverse().join('');
        // console.log(sum_str_rev);

        if (sum_str == sum_str_rev){
            flag = false;
        }
        else {
            steps +=1;
            n = parseInt(sum_str)
        }
    }

    return steps;

}

console.log(palindromeChainLength(77));