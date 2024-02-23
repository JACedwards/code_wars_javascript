// function getMiddle(s) {

//     if (s.length % 2 != 0) {

//         return s[(Math.floor(s.length / 2))]
//     }
//     else {
//         let mid = (Math.floor(s.length / 2))
        
//         return s.slice(mid - 1, mid +1)
//     }

// }

// console.log(getMiddle("test"));


function getMiddle(s) {

    let mid = (Math.floor(s.length / 2))
    console.log(mid);

    return s.length % 2 === 0 ?
    s.slice(mid - 1, mid +1) :
    s[mid]
    
}

console.log(getMiddle("test"));


