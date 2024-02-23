// The input is a string str of digits. Cut the string into chunks (a chunk here is a substring of the initial string) of size sz (ignore the last chunk if its size is less than sz).

// If a chunk represents an integer such as the sum of the cubes of its digits is divisible by 2, reverse that chunk; otherwise rotate it to the left by one position. Put together these modified chunks and return the result as a string.

// If

// sz is <= 0 or if str is empty return ""
// sz is greater (>) than the length of str it is impossible to take a chunk of size sz hence return "".
// Examples:
// revrot("123456987654", 6) --> "234561876549"
// revrot("123456987653", 6) --> "234561356789"
// revrot("66443875", 4) --> "44668753"
// revrot("66443875", 8) --> "64438756"
// revrot("664438769", 8) --> "67834466"
// revrot("123456779", 8) --> "23456771"
// revrot("", 8) --> ""
// revrot("123456779", 0) --> "" 
// revrot("563000655734469485", 4) --> "0365065073456944"
// Example of a string rotated to the left by one position:
// s = "123456" gives "234561".

//split into list of sz size strings
// check each for length:
//  if less than sz, just concatinate without changing.
//  map/reduce string to check whether sum of the digits cubed % 2 == 0;
//      if so, reverse that string and concatinate
//      if not, rotate by one and concatinate 

//(need to solve uneven number problem later)

// function revrot(str, sz) {

//     let lst_slc = []
//     //"234561 356789"
//     while (str.length > 0){
//         if (str.length < sz){
//             lst_slc.push(str);
//         }else{
//             lst_slc.push(str.slice(0,sz));
//             str = str.slice(sz);
//         }
//     }
//     // lst_slc = [ '123456', '987653' ]

//     let cube_check = 0;
//     let slc_to_lst = []
//     let output = []
//     let rotate =''
//     for (let i = 0; i < lst_slc.length; i++){
//         // sum of the cubes of its digits is divisible by 2
//         slc_to_lst = lst_slc[i].split('').map(e => e = parseInt(e))
//         // [ 1, 2, 3, 4, 5, 6 ]
//         // [ 9, 8, 7, 6, 5, 3 ]    
//         cube_check = (slc_to_lst.reduce((a,b) => a + Math.pow(b, 3),0)) % 2
//         if (cube_check === 0){
//             rev = lst_slc[i].split('').reverse().join('');
//             output.push(rev);
//         }
//         else{
//             rotate = `${lst_slc[i].slice(1)}${lst_slc[i][0]}`
//             output.push(rotate);
//         }

//     }
//     return output.join('');
// }

// console.log(revrot("123456987653", 6))

// "234561 356789"


function revrot(str, sz) {

    if (sz > str.length){
        return''
    }
    else if (sz === 0){
        return ''
    }

    let mod_check = str.length % sz;
    let end = ''
    let floor = 0
    if (mod_check!== 0){
        floor = Math.floor(str.length / sz);
        console.log(floor*sz); 
        end = str.slice(floor*sz);
        str = str.slice(0,floor*sz);
        console.log(str);
    }

    let lst_slc = []
    //"234561 356789"
    while (str.length > 0){
        if (str.length < sz){
            lst_slc.push(str);
        }else{
            lst_slc.push(str.slice(0,sz));
            str = str.slice(sz);
        }
    }
    // lst_slc = [ '123456', '987653' ]

    let cube_check = 0;
    let slc_to_lst = []
    let output = []
    let rotate =''
    for (let i = 0; i < lst_slc.length; i++){
        // sum of the cubes of its digits is divisible by 2
        slc_to_lst = lst_slc[i].split('').map(e => e = parseInt(e))
        // [ 1, 2, 3, 4, 5, 6 ]
        // [ 9, 8, 7, 6, 5, 3 ]    
        cube_check = (slc_to_lst.reduce((a,b) => a + Math.pow(b, 3),0)) % 2
        if (cube_check === 0){
            rev = lst_slc[i].split('').reverse().join('');
            output.push(rev);
        }
        else{
            rotate = `${lst_slc[i].slice(1)}${lst_slc[i][0]}`
            output.push(rotate);
        }

    }
    return output.join('');
}

console.log(revrot("12345698765312", 6))

// "234561 356789 12"