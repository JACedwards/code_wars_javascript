//Your task, is to create N×N multiplication table, of size provided in parameter.

// For example, when given size is 3:

// 1 2 3
// 2 4 6
// 3 6 9
// For the given example, the return value should be:

// [[1,2,3],[2,4,6],[3,6,9]]

let multiplicationTable = function(size) {

    let outputArr = [];
    let tempArr = [];
    let countOutput = 1;
    let countTemp = 1;

    while (outputArr.length < size) {; //1 //2
        if (tempArr.length < size) { //1 //
            tempArr.push(countTemp)
            console.log('tempArr', tempArr);
            countTemp += 1 
            countOutput += 1; 
        }
        else {
            outputArr.push(tempArr);
            tempArr = [];
            console.log('outputArr', outputArr);
        }
    }

    return outputArr;
    }

  console.log(multiplicationTable(3));