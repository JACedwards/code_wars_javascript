// Sort the given array of strings in alphabetical order, case insensitive. For example:

// ["Hello", "there", "I'm", "fine"]  -->  ["fine", "Hello", "I'm", "there"]
// ["C", "d", "a", "B"])              -->  ["a", "B", "C", "d"]

// sortme = function( names ){
//     let l = 0;
//     let r = 1;
//     names_sorted = []
//     while (r <= names.length - 1) {
//         if (names[l] < names[r]){
//             names_sorted.push(names[l]);
//         } else {

//         }
//     }
// }

// console.log(sortme(["Hello", "there", "I'm", "fine"]));

// sortme = function( names ){
//     let dct = {}
//     for (let i = 0; i < names.length; i++){
//         dct[names[i].toUpperCase()] = names[i];
//     }

//     console.log(dct);    
//     names = names.map(e => e = e.toUpperCase());
//     // console.log(names);
//     let srtd_names = names.sort();
//     console.log(srtd_names);
//     return srtd_names.map(e => e = dct[e]);

// }

// // console.log(sortme(["Hello", "there", "I'm", "fine", "hell"]));
// console.log(sortme(["the","early","She","Early","get"]));
// // ["early","Early","get","She","the"]
// // [ 'Early', 'Early', 'get', 'She', 'the' ]  getting


sortme = function( names ){
    let dct = {}
    let upper_lst = names.map(f => f = f.toUpperCase());
    let name_check = []

    // console.log('names ' + names);
    // console.log('upper_lst ' + upper_lst);
    for (let i = 0; i < names.length; i++){
        name_check.push(names[i].toUpperCase());

        console.log('upper_lst_slice ' + upper_lst.slice(i+1))
        console.log('names[i].to upper ' + names[i].toUpperCase())
        console.log('names[i][0] ' + names[i][0])

        if (upper_lst.slice(i+1).includes(names[i].toUpperCase() && names[i][0] == names[i][0].toUpperCase())){
            dct[names[i]] = `${names[i].toUpperCase()}z`;
        }
        else if (upper_lst.slice(i+1).includes(names[i].toUpperCase() && names[i][0] == names[i][0].toLowerCase())){
            dct[names[i]] = `${names[i].toUpperCase()}a`
        }
        else {
            dct[names[i]] = `${names[i].toUpperCase()}`
        }
        
        
    }

    for (const [key, value] of Object.entries(dct)) {
        console.log(`${key}: ${value}`);
      }



    let upper_lst_w_z = []
    for (let j = 0; j < upper_lst.length; j++)
        if (upper_lst_w_z.includes(upper_lst[j])){
            upper_lst_w_z.push(upper_lst[j] + 'z')
        }
        else{
            upper_lst_w_z.push(upper_lst[j]);
        }
    
    
    // console.log(names);
    let srtd_names = upper_lst_w_z.sort();
    console.log('this is srtd_names ' + srtd_names);

    
    let output = [];

    for (let k = 0; k < srtd_names.length; k++){
        output.push(Object.keys(dct).filter(key => dct[key] === srtd_names[k]))
    }
    console.log('upper_list  ' + upper_lst)
    console.log('original names ' + names)

    return output


}

// console.log(sortme(["Hello", "there", "I'm", "fine", "hell"]));
console.log(sortme(["the","Early","She","early","get"]));
// ["early","Early","get","She","the"]
// [ 'Early', 'Early', 'get', 'She', 'the' ]  getting
