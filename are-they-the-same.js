// Given two arrays a and b write a function comp(a, b) (orcompSame(a, b)) that checks whether the two arrays have the "same" elements, with the same multiplicities (the multiplicity of a member is the number of times it appears). "Same" means, here, that the elements in b are the elements in a squared, regardless of the order.

// Examples
// Valid arrays
// a = [121, 144, 19, 161, 19, 144, 19, 11]  
// b = [121, 14641, 20736, 361, 25921, 361, 20736, 361]
// comp(a, b) returns true because in b 121 is the square of 11, 14641 is the square of 121, 20736 the square of 144, 361 the square of 19, 25921 the square of 161, and so on. It gets obvious if we write b's elements in terms of squares:

// a = [121, 144, 19, 161, 19, 144, 19, 11] 
// b = [11*11, 121*121, 144*144, 19*19, 161*161, 19*19, 144*144, 19*19]
// Invalid arrays
// If, for example, we change the first number to something else, comp is not returning true anymore:

// a = [121, 144, 19, 161, 19, 144, 19, 11]  
// b = [132, 14641, 20736, 361, 25921, 361, 20736, 361]

function comp(array1, array2){
    let goober = true
    if ((array1 == null && array2 != null) | (array1 != null && array2 == null)){
        return false;
        }
    array1 = array1.map(e => e * e);
    let arr1_set = new Set(array1);

    let ar_1_cnt = 0;
    let ar_2_cnt = 0;

    arr1_set.forEach(element => {
        ar_1_cnt = array1.filter(e => e == element).length; 
        ar_2_cnt = array2.filter(e => e == element).length;
        if (ar_1_cnt != ar_2_cnt){
            goober = false;
        } 

        
        });
    return goober
    }


console.log(comp([121, 144, 19, 161, 19, 144, 19, 11], [132, 14641, 20736, 361, 25921, 361, 20736, 361]));
console.log(comp([2, 2, 4, 5], [4, 20, 16, 25]));


// From code wars solutions:

// function comp(a, b) {
//     if (!a || !b || a.length !== b.length) return false;
//     return a.map(x => x * x).sort().toString() === b.sort().toString();
// }