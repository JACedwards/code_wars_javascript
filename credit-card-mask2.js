
// function maskify(cc) {
    
//     if (cc.length <= 4) {
//         return cc;
//     }
//     else {
//         // let difference = cc.length - 4;
//         // let lastFour = cc.slice(difference);
        
//         return '#'.repeat(cc.length - 4) + cc.slice(cc.length-4)
//     }
// }

// console.log(maskify('Skippy'));




// "4556364607935616" --> "############5616"
//      "64607935616" -->      "#######5616"
//                "1" -->                "1"
//                 "" -->                 ""

// // "What was the name of your first pet?"
// "Skippy" --> "##ippy"
// "Nananananananananananananananana Batman!" --> "####################################man!"

function maskify(cc) {

    return cc.length <= 4 ? cc : '#'.repeat(cc.length - 4) + cc.slice(cc.length-4)
}

console.log(maskify('4'));