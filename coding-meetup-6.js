// You will be given an array of objects (associative arrays in PHP, tables in COBOL) representing data about developers who have signed up to attend the next coding meetup that you are organising.

// Your task is to return either:

// true if all developers in the list code in the same language; or
// false otherwise.
// For example, given the following input array:

// var list1 = [
//   { firstName: 'Daniel', lastName: 'J.', country: 'Aruba', continent: 'Americas', age: 42, language: 'JavaScript' },
//   { firstName: 'Kseniya', lastName: 'T.', country: 'Belarus', continent: 'Europe', age: 22, language: 'JavaScript' },
//   { firstName: 'Hanna', lastName: 'L.', country: 'Hungary', continent: 'Europe', age: 65, language: 'JavaScript' },
// ];
// your function should return true.


// function isSameLanguage(list) {
//     let lst = []
//     for (i = 0; i < list.length; i++){
//         let lang = list[i]["language"]
//         lst.push(lang)
//     }
//     let set = new Set(lst)
//     console.log(set)
//     if (set.size == 1){
//         return true;
//     }
//     else{
//         return false;
//     }
// }

// console.log(isSameLanguage([
//     { firstName: 'Daniel', lastName: 'J.', country: 'Aruba', continent: 'Americas', age: 42, language: 'JavaScript' },
//     { firstName: 'Kseniya', lastName: 'T.', country: 'Belarus', continent: 'Europe', age: 22, language: 'JavaScript' },
//     { firstName: 'Hanna', lastName: 'L.', country: 'Hungary', continent: 'Europe', age: 65, language: 'JavaScript' },
//   ]))

//   var arr = [ 1, 3, 2, 3, 5 ];
// var set = new Set(arr);

// function isSameLanguage(list) {
//     let lang = list[0]["language"]

//     for (i = 1; i < list.length; i++){
//         if (list[i]["language"] != lang) {
//             return false
//         }
//     }
//     return true
//   }

// console.log(isSameLanguage([
//     { firstName: 'Daniel', lastName: 'J.', country: 'Aruba', continent: 'Americas', age: 42, language: 'JavaScript' },
//     { firstName: 'Kseniya', lastName: 'T.', country: 'Belarus', continent: 'Europe', age: 22, language: 'JavaScript' },
//     { firstName: 'Hanna', lastName: 'L.', country: 'Hungary', continent: 'Europe', age: 65, language: 'JavaScript' },
//   ]))

// function isSameLanguage(list) {
//     for (i = 1; i < list.length; i++){
//         if (list[i]["language"] != list[0]["language"]) {
//             return false
//         }
//     }
//     return true
//   }

// console.log(isSameLanguage([
//     { firstName: 'Daniel', lastName: 'J.', country: 'Aruba', continent: 'Americas', age: 42, language: 'JavaScript' },
//     { firstName: 'Kseniya', lastName: 'T.', country: 'Belarus', continent: 'Europe', age: 22, language: 'JavaScript' },
//     { firstName: 'Hanna', lastName: 'L.', country: 'Hungary', continent: 'Europe', age: 65, language: 'JavaScript' },
//   ]))

  function isSameLanguage(list) {
    return list.every(goober => goober.language == list[0].language);
    }

  


console.log(isSameLanguage([
    { firstName: 'Daniel', lastName: 'J.', country: 'Aruba', continent: 'Americas', age: 42, language: 'JavaScript' },
    { firstName: 'Kseniya', lastName: 'T.', country: 'Belarus', continent: 'Europe', age: 22, language: 'JavaScript' },
    { firstName: 'Hanna', lastName: 'L.', country: 'Hungary', continent: 'Europe', age: 65, language: 'JavaScript' },
  ]))

//   array.every(function(currentValue, index, arr), thisValue)
// Parameters
// Parameter	Description
// function()	Required.
// A function to be run for each element in the array.
// currentValue	Required.
// The value of the current element.
// index	Optional.
// The index of the current element.
// arr	Optional.
// The array of the current element.
// thisValue	Optional. Default undefined.
// A value passed to the function as its this value.