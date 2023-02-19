// Introduction
// The first century spans from the year 1 up to and including the year 100, the second century - from the year 101 up to and including the year 200, etc.

// Task
// Given a year, return the century it is in.

// Examples
// 1705 --> 18
// 1900 --> 19
// 1601 --> 17
// 2000 --> 20

function century(year) {
    year = year.toString();
    if (year == '100'){
        return 1
    }
    else if (year.length == 1 | year.length == 2){
        return 1
    }
    
    else if (year.length == 3){
        console.log(`${Number(year.slice(0,1) + 2)}`)
        return Number(year.slice(0,1) + 2);
  
    }
    else if (year.slice(-2) == '00') {
        console.log(`${Number(year.slice(0,-2))}`)
        return Number(year.slice(0,-2));
    }
    else {
        console.log(`${Number(year.slice(0,-2)) + 1}`)
        return Number(year.slice(0,-2)) + 1;
    }
    
  }

console.log(century(392700))