// Given a string of digits, you should replace any digit below 5 with '0' and any digit 5 and above with '1'. Return the resulting string.

// Note: input will never be an empty string

function fakeBin(x){
    let output = [];
    x = x.split('');
    for (i = 0; i < x.length; i++){
        
        output.push(x[i] < 5 ? 0 : 1);
    }
    return output.join('')
}

console.log(fakeBin('45385593107843568'))