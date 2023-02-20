// let strng = "10 65 74 100 99 68 86 180 90"

// let nums = {1:'one', 10:'ten', 11: 'eleven', 12: 'tw', 13: 'th', 14:'fo', 15:'fi', 16: 'si', 17:'se', 18:'ei', 19:'ni', 2: 'tw', 3: 'th', 4 : 'fo', 5 : 'fi', 6 : 'si', 7:'se', 8:'ei', 9:'ni'}

// let alphas = []
// let alpha = ''

// for (let l = 0; l < strng.length; l++){
//     for (let m = 0; m <strng[l].length; m++) {
//         if (strng[1] == '10') {
//             alpha = nums[10];
//             console.log(alpha)
//         }

//     }
// }
// alpha = nums[10];
// console.log(alpha)

// let arr = [1, 2, 3, 4];
// arr.every((elem, index, arr) => {
//   arr[index]--;
//   console.log(`[${arr}][${index}] -> ${elem}`);
//   console.log(elem < 2);
// });

arr = ['1', '2', '3'];
let output = []

arr.every((elem, index, arr) => {
  output.push(parseInt(elem));
  console.log(output);
  return elem < arr.length + 1;
});


