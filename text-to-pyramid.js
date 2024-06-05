const fs = require(fs);

const textToArray = filename => 
    fs
        .readFileSync(filename)
        .toString('UTF8')
        .split('\n');

let arr = textToArray('textfile.txt');

function decodeText (arr) {

    let arrSplit = arr.map(e => e.split(' '));
    let arrSplitNum = arrSplit.map(e => [parseInt(e[0]), e[1]]).sort((a,b) => a[0] - b[0]);
    let arrWordsOnly = arrSplitNum.map(e => e[1])
    let output = []
    let r = 0;
    while (arrWordsOnly.length > 0) {

        output.push(arrWordsOnly[r]);
        arrWordsOnly = arrWordsOnly.slice(r+1);
        r += 1;
    }

    return output.join(' ');
}

console.log(decodeText(arr))



