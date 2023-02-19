// Simple, remove the spaces from the string, then return the resultant string.
//'8 j 8   mBliB8g  imjB8B8  jl  B'), '8j8mBliB8gimjB8B8jlB')

function noSpace(x){
    output = x.split(' ').join('');
    return output
}
console.log(noSpace('8 j 8   mBliB8g  imjB8B8  jl  B'))