function zeros (n) {
    if (n < 5) {
        return 0;
    }
    else {

        return Math.floor(n/5)
    }
}

// console.log(zeros(15));


function zeros (n) {

        return n < 5 ? 0 : Math.floor(n/5)
}

console.log(zeros(15));