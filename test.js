function solve(arr){  
    let output =  arr.map(s => s.toUpperCase().split(''))

  return output
};

  console.log(solve(["abode","ABc","xyzD"]))
//   .filter((c, i) => c.charCodeAt() - 'A'.charCodeAt() === i).length