function highAndLow(numbers){
    arr = []
    numbers = numbers.split(" ").map((e) => parseInt(e));
    sorted = numbers.sort((a, b) => a - b);
    console.log(numbers);
    arr.push(sorted[0]);
    arr.push(sorted[sorted.length - 1]);
    console.log(arr);
    return arr.join(' ');

  }

console.log(highAndLow("8 3 -5 42 -1 0 0 -9 4 7 4 -4"))