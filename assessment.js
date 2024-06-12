function frequencyMap(n) {
n = n.toString().split('');
let nSet = new Set(n);
let nArr = Array.from(nSet);
console.log(nArr);
let obj = {};
for (let i = 0; i < nArr.length; i++) {
    obj[nArr[i]] = 0;
}

for (let j = 0; j < n.length; j++)

    obj[]


}

console.log(frequencyMap('12131423'));

// {1 : 3, 2: 2, 3:2, 4:1}
// ['1', '2', '1','3', '1', '4','2', '3']
]