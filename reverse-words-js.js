function reverseWords(str) {

    words = str.split(' ');

    let perverted = words.map(e => e.split('').reverse().join('')).join(' ')

    return perverted


}

console.log(reverseWords('This is'));


// "This is an example!" ==> "sihT si na !elpmaxe"
// "double  spaces"      ==> "elbuod  secaps"