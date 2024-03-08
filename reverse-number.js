

function reverseNumber(n) {

    return (n < 0 ? -1 : 1) * Math.abs(n).toString().split('').reverse().join('')
}

console.log(reverseNumber(-123))

