// function printerError(s) {

//     // const regex = /[n-z]/g
//     const matches = s.match(/[n-z]/g);
//     if (matches == null) {
//         return '0'+'/'+ s.length
//     }

//     else {
//         return matches.length + '/' + s.length
//     }

// }

// return s.match(/[n-z]/) == null ? '0'+'/'+ s.length : s.match(/[n-z]/).length + '/' + s.length

function printerError(s) {


    return s.match(/[n-z]/g) == null ? '0'+'/'+ s.length : s.match(/[n-z]/g).length + '/' + s.length

}


console.log(printerError("aaaxbbbbyyhwawiwjjjwwm"))
// s="aaabbbbhaijjjm"
// printer_error(s) => "0/14"

// s="aaaxbbbbyyhwawiwjjjwwm"
// printer_error(s) => "8/22"