function oddOrEven(array) {

    if (array.length == 0) {
        return 'even'
    }

    return array.reduce((a,b) => a + b) % 2 == 0 ? 'even' : 'odd';
}

console.log(oddOrEven([]))



// Input: [0]
// Output: "even"

// Input: [0, 1, 4]
// Output: "odd"

// Input: [0, -1, -5]
// Output: "even"