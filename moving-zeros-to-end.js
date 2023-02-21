// Write an algorithm that takes an array and moves all of the zeros to the end, preserving the order of the other elements.

// moveZeros([false,1,0,1,2,0,1,3,"a"]) // returns[false,1,1,2,1,3,"a",0,0]

//psuedo:
//  map:
//  if "0", count +=1


//currently works only if false is only non-number/letter used.  Also, Chose turning false into string 'false' because trying to count zeros didn't work because any false also returned a zero.

function moveZeros(arr) {
    arr = arr.map(f => f.toString());
    // console.log(arr)
    let zeros = arr.filter(x => x == '0');
    console.log(zeros)
    let filtered = arr.filter(not_zero => not_zero != '0');
    console.log(filtered);
    let str_output = filtered.concat(zeros);
    console.log(str_output);
    let output = []
    for (let i = 0; i < str_output.length; i++){
        if (str_output[i] == 'false'){
            output.push(false);
        }

        else if ((/[a-zA-Z]/).test(str_output[i])){
            output.push(str_output[i])
        }
        else if (str_output[i] != NaN){
            output.push(Number(str_output[i]));
        }


    }
    return output
  }

console.log(moveZeros([false,1,0,1,2,0,1,3,"a"]))