function accum(s) {
    let l = 1;
    let temp = ''
    let upper = ''
    let times = 0
    let output = ''
    for (let i = 0; i < s.length; i++) {

        upper = s[i].toUpperCase();
        temp = s[i].toLowerCase().repeat(times)
        temp = upper + temp + '-'
        output = output + temp;
        console.log(output);
        times += 1
    }

    return output.slice(0, output.length-1);

}

console.log(accum("abC"));