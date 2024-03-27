function incrementString (strng) {

    let index = 0;

    for (let i = strng.length-1; i > 0; i--) {

        if (/[a-zA-Z]/.test(strng[i])) {
        index =  i;
        break;
        }
    }

    if (index == 0) {

        let numString =  (parseInt(strng) + 1).toString()
        return numString.padStart(strng.length, '0')
    }

    if (strng.length == index + 1) {
        return strng + '1'
    }

    let leadingZerosCheck = strng.slice(index+1).length

    let numString = ((parseInt(strng.slice(index+1))) + 1).toString();

    let paddedNum = numString.padStart(leadingZerosCheck, '0')

    return strng.slice(0,index +1) + paddedNum
    
}

  console.log(incrementString("1"))  // fo99obar100

// function incrementString (strng) {

//     let index = 0;

//     for (let i = strng.length-1; i > 0; i--) {

//         if (/[a-zA-Z]/.test(strng[i])){

//         index =  i;
//         break;
//         }
//     }

//     console.log('index', index)

//     if (index == 0) {

//         let numString =  (parseInt(strng) + 1).toString()
//         return numString.padStart(strng.length, '0')
//     }

//     if (strng.length == index + 1) {
//         console.log('hitting 15')

//         return strng + '1'
//     }

//     let leadingZerosCheck = strng.slice(index+1).length
//     // console.log('leadingZeros', leadingZerosCheck);

//     let numString = ((parseInt(strng.slice(index+1))) + 1).toString();

//     let paddedNum = numString.padStart(leadingZerosCheck, '0')

//     return strng.slice(0,index +1) + paddedNum
    
// }

//   console.log(incrementString("1"))  // fo99obar100




// let strng = 'foo0042'
// let goober = strng.match(/\d/g); //[ '0', '0', '4', '2' ]
// let parsedArr = parseInt(goober.join('')); //42

// let stringSplit = strng.split(goober[0].toString()); //[ 'foo', '', '42' ]

// let incremented = (parsedArr + 1).toString(); //'43'

// let stringifiedNum = incremented.padStart(goober.length, '0');

// return stringSplit + stringifiedNum
