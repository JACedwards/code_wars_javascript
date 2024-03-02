// var isAnagram = function(test, original) {

//     if (test.length != original.length) {
//         return false;
//     }

//     test = test.toLowerCase().split('').sort();
//     original = original.toLowerCase().split('').sort()
//     for (let i = 0; i < test.length; i++) {
//         if (test[i] == original[i]) {
//             continue;
//         }
//         else {
//             return false;
//         }
//     }
//     return true;
// };


// console.log(isAnagram("toffee","fozfet"))

var isAnagram = function(test, original) {

    test = test.toLowerCase().split('').sort().join('');
    original = original.toLowerCase().split('').sort().join('');
    
    return (test == original) ? true: false;
};


console.log(isAnagram("toffee","fozfet"))