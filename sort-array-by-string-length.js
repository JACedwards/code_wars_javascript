// function sortByLength (array) {
//     let obj = {}
//     let arr = []
//     for (let i = 0; i < array.length; i++) {

//         obj[parseInt(array[i].length)] = array[i];

//     }

//     let output = [];
//     for (const [key, value] of Object.entries(obj)) {
//         output.push(value);
//       }
//     return output
//   }

//   console.log(sortByLength(["Telescopes", "Glasses", "Eyes", "Monocles"]))

  function sortByLength (array) {
    let obj = {}
    for (let i = 0; i < array.length; i++) {
        
        obj[array[i].length] = array[i];
    }

    let output = [];
    for (let value of Object.values(obj)) {
        output.push(value);
      }
    return output
  }

  console.log(sortByLength(["Telescopes", "Glasses", "Eyes", "Monocles"]))
  function sortByLength (array) {
    return array.sort((a,b) => a.length - b.length);
  };

  sortByLength(["Telescopes", "Glasses", "Eyes", "Monocles"])