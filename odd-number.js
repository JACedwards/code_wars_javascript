function stray(numbers) {
    let numberSet = new Set(numbers);
    let numberArr = Array.from(numberSet)
    let zeroCount = 0;
    let oneCount = 0;

    for (let i = 0; i < numbers.length; i++) {
        if (numbers[i] == numberArr[0]) {
            zeroCount += 1;
        }
        else {
            oneCount += 1;
        }
    }
    return zeroCount == 1 ? numberArr[0] : numberArr[1];
}

console.log(stray([17, 17, 3, 17, 17, 17, 17]))
//[1, 1, 2] ==> 2
// [17, 17, 3, 17, 17, 17, 17] ==> 3

function stray(numbers) {
    let numberSet = new Set(numbers);
    let numberArr = Array.from(numberSet)
    
    return numbers.filter((x) => x==numberArr[0]).length == 1 ? numberArr[0] : numberArr[1];
}

console.log(stray([1,1,2]))