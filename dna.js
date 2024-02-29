function dnaStrand(dna){

    dnaObject = {'A':'T', 'T':'A', 'C':'G', 'G':'C'};
    
    return dna.split('').map(e => dnaObject[e]).join('');
  }

console.log(dnaStrand('ATTGC'))

// "A" and "T" are complements of each other, as "C" and "G". 