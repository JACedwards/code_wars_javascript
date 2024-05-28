
// function arrayDiff(a, b) {

   
//     let output = [];

  
//     for (let i = 0; i < a.length; i++) {

//          if (b.indexOf(a[i]) == -1) {
//             output.push(a[i])
//          }
//     }
//     return output;
    
//   }
  
//   console.log(arrayDiff([1,2,2],[1]))


function arrayDiff(a, b) {

    return a.filter(e => e = b.indexOf(e) == -1);

  }
  
  console.log(arrayDiff([1,2,2],[1]))