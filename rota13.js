function rot13(message){
    
    let lowerOne = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
    let lowerTwo = ['n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm']
    let upperOne = lowerOne.map((e) => e = e.toUpperCase());
    let upperTwo = lowerTwo.map((e) => e = e.toUpperCase());
    let one = lowerOne.concat(upperOne);
    let two = lowerTwo.concat(upperTwo)

    const cipherObj = Object.fromEntries(
        one.map((key, index) => [key, two[index]]),
    );

    // let regex = new RegExp('[a-zA-Z]');

    return [...message].map((e) => /[a-zA-Z]/.test(e) ? cipherObj[e] : e).join('')
  }

console.log(rot13("Test"))  //Grfg


function rot13(message){
    
    let lowerOne = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
    let lowerTwo = ['n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', ]
    let upperOne = lowerOne.map((e) => e = e.toUpperCase());
    let upperTwo = lowerTwo.map((e) => e = e.toUpperCase());

    const lowerObj = Object.fromEntries(
        lowerOne.map((key, index) => [key, lowerTwo[index]]),
    );

    const upperObj = Object.fromEntries(
        upperOne.map((key, index) => [key, upperTwo[index]]),
    );

    let combinedObj = {...lowerObj, ...upperObj}

    let regex = new RegExp('[a-zA-Z]');

    return [...message].map((e) => regex.test(e) ? combinedObj[e] : e).join('')
  }

console.log(rot13("Test"))  //Grfg

