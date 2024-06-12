//Complete the solution so that it strips all text that follows any of a set of comment markers passed in. Any whitespace at the end of the line should also be stripped out.

// Example:

// Given an input string of:

// apples, pears # and bananas
// grapes
// bananas !apples
// The output expected would be:

// apples, pears
// grapes
// bananas
// The code would be called like so:

// var result = solution("apples, pears # and bananas\ngrapes\nbananas !apples", ["#", "!"])
// result should == "apples, pears\ngrapes\nbananas"

function solution(text, markers) {
    // text = text.replace(/\n/g, ' ');
    // console.log('text',text);
    // let regExSpace = new RegExp("\\s/g")
    // console.log(regExSpace);
    if (markers.length == 0) {
        text = text.replace(/\s+\n/g, '')
        return text.trimEnd();
    }

    let regEx1;
    let regEx2

    for (let i = 0; i < markers.length; i++) {
        
    regEx1 = new RegExp(`${markers[i]}.+\n`,"g");
    regEx2 = new RegExp(`${markers[i]}.+$`,"g");

    text = text.replace(regEx1, '\n');
    text = text.replace(regEx2, '\n');
    }

    let finalSpaceIndex = text.lastIndexOf('\n');
    let strLength = text.length;
    if (strLength - 1 == finalSpaceIndex) {
        // console.log(finalSpaceIndex=text.lastIndexOf('\n'));
        // console.log(text.length);    
        // console.log('same');
        return text.slice(0, strLength - 1).trimEnd();
    }
    text = text.replace(/\s+\n/g, '')
   return text.trimEnd();
}

  console.log(solution('#aa bb\ncc dd', ['#']))

  // The output expected would be:

// apples, pears
// grapes
// bananas

// let year = 'II';
// let sem = 'I';
// let regex = new RegExp(`${year} B.Tech ${sem} Sem`, "g");
// console.log(regex)

//working without variables

// function solution(text, markers) {
//     // text = text.replace(/\n/g, ' ');
//     // console.log('text',text);
//     // let regExSpace = new RegExp("\\s/g")
//     // console.log(regExSpace);
//     // let regEx = new RegExp(`${special}\s.+\n`)

//     return text.replace(/#\s.+\n|![A-Za-z]+/g, ' \n')
//   }

//   console.log(solution("apples, pears # and bananas\ngrapes\nbananas !apples", ["#", "!"]))