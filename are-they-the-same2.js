function comp(array1, array2){
  
    if (array1 === null || array2 === null) {
      return false;
    }
    array1 = array1.sort((a,b) => a-b);
    
    return JSON.stringify(array2.sort((a,b) => a-b)) == JSON.stringify(array1.map(e => e*e))

}
console.log(comp([121, 144, 19, 161, 19, 15, 19, 11],[121, 14641, 20736, 361, 25921, 361, 20736, 361]))

