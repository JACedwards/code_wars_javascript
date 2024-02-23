// function squareDigits(num){
//     num = num.toString();
//     let dig = 0;
//     let digitSquared = []


//     for (let i = 0; i < num.length; i++) {

//         dig = parseInt(num[i])**2;
//         digitSquared.push(dig.toString());
//     }
    
//     // console.log(digitSquared.join(''))
//     return parseInt(digitSquared.join(''));
//   }

//   console.log(squareDigits(9119));

  function squareDigits(num){
    num = num.toString().split('').map(num => parseInt(num)).map(num => num * num).join('');
    return num
  }

  console.log(squareDigits(9119));