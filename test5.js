// program to check if the string is palindrome or not

function checkPalindrome(string) {

    // convert string to an array
    const arrayValues = string.split('');

    console.log('arrayValues   ' + arrayValues);

    // reverse the array values
    const reverseArrayValues = arrayValues.reverse();

    console.log('reverseArray  ' + reverseArrayValues)

    // convert array to string
    const reverseString = reverseArrayValues.join('');

    console.log('reverseString  ' + reverseString);

    console.log('if string (' + string + ') = (' + reverseString + ')')

    if(string == reverseString) {
        console.log('It is a palindrome');
    }
    else {
        console.log('It is not a palindrome');
    }
}



console.log(checkPalindrome('tube'));

