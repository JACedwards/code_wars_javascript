function maxMultiple(divisor, bound){

//     while (bound > 0) {

//         if (bound % divisor == 0) {
//             return bound
//         }

//         bound -= 1;
//     }
// }
  return bound - bound % divisor
}

console.log(maxMultiple(3,10))

// assert.strictEqual(maxMultiple(2,7),6);
//     assert.strictEqual(maxMultiple(3,10),9);
//     assert.strictEqual(maxMultiple(7,17),14);
//     assert.strictEqual(maxMultiple(10,50),50);

