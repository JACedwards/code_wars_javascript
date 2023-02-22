// Write a function, which takes a non-negative integer (seconds) as input and returns the time in a human-readable format (HH:MM:SS)

// HH = hours, padded to 2 digits, range: 00 - 99
// MM = minutes, padded to 2 digits, range: 00 - 59
// SS = seconds, padded to 2 digits, range: 00 - 59
// The maximum time never exceeds 359999 (99:59:59)

// You can find some examples in the test fixtures.

// floor dived seconds by 3600
//    if less than 9, add 0 to beginning of concat; else result
//    multiple floor divide by 3600
//    subtract that from input number/seconds, etc.


function humanReadable (seconds) {
    
    //minute convert

    let time = '';
    let hours = Math.floor(seconds / 3600);
    if (hours < 10){
        time = `0${hours}:`;
    }
    else {
        time = `${hours}:`;
    }
    seconds = seconds - (hours * 3600)

    //minute convert
    let minutes = Math.floor(seconds / 60);
    if (minutes < 10){
        time = `${time}0${minutes}:`;
    }
    else {
        time = `${time}${minutes}:`;
    }
    seconds = seconds - (minutes * 60)
    console.log(time)
    
    //seconds
    if (seconds < 10){
        time = `${time}0${seconds}`;
    }
    else {
        time = `${time}${seconds}`;
    }
    return time

  }

  console.log(humanReadable(45296))

//   '12:34:56', 'humanReadable(45296)');

// hour - seconds:  3600
// minute - seconds: 60
