//Write a method (or function, depending on the language) that converts a string to camelCase, that is, all words must have their first letter capitalized and spaces must be removed.

// Examples (input --> output):
// "hello case" --> "HelloCase"
// "camel case word" --> "CamelCaseWord"

function camelCase(strng) {
    strng = strng.split(' ');
    return strng.map(e => e[0].toUpperCase() + e.slice(1)).join('');
}

console.log(camelCase("camel case word"))