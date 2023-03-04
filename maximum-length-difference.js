// You are given two arrays a1 and a2 of strings. Each string is composed with letters from a to z. Let x be any string in the first array and y be any string in the second array.

// Find max(abs(length(x) − length(y)))

// If a1 and/or a2 are empty return -1 in each language except in Haskell (F#) where you will return Nothing (None).

// Example:
// a1 = ["hoqq", "bbllkw", "oox", "ejjuyyy", "plmiis", "xxxzgpsssa", "xxwwkktt", "znnnnfqknaz", "qqquuhii", "dvvvwz"]
// a2 = ["cccooommaaqqoxii", "gggqaffhhh", "tttoowwwmmww"]
// mxdiflg(a1, a2) --> 13
// Bash note:
// input : 2 strings with substrings separated by ,
// output: number as a string

function mxdiflg(a1, a2) {
    if (a1.length == 0 || a2.length == 0){
        return -1
    }
    let a1_min = Infinity;
    let a1_max = 0

    for (let i = 0; i < a1.length;i++){
        if (a1[i].length < a1_min){
            a1_min = a1[i].length;
        }
        if (a1[i].length > a1_max){
            a1_max = a1[i].length;
        }
    }
    console.log(a1_min, a1_max);

    let a2_min = Infinity;
    let a2_max = 0

    for (let i = 0; i < a2.length;i++){
        if (a2[i].length < a2_min){
            a2_min = a2[i].length;
        }
        if (a2[i].length > a2_max){
            a2_max = a2[i].length;
        }
    }
    console.log(a2_min, a2_max);

    a1_m_a2 = a1_max - a2_min;
    a2_m_a1 = a2_max - a1_min;

    if (a1_m_a2 > a2_m_a1){
        return a1_m_a2;
    }
    else {
        return a2_m_a1
    }
}

console.log(mxdiflg(["hoqq", "bbllkw", "oox", "ejjuyyy", "plmiis", "xxxzgpsssa", "xxwwkktt", "znnnnfqknaz", "qqquuhii", "dvvvwz"], ["cccooommaaqqoxii", "gggqaffhhh", "tttoowwwmmww"]))

//alternative from submissions:

function mxdiflg(a1, a2) {
    if (a1.length === 0 || a2.length === 0) return -1
    let l1 = a1.map(str => str.length)
    let l2 = a2.map(str => str.length)
    return Math.max(Math.max(...l1) - Math.min(...l2), Math.max(...l2) - Math.min(...l1))
  }