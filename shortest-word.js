function findShort(s){

    return Math.min(...s.split(" ").map(e => e.length));
}

console.log(findShort("bitcoin take over the world maybe who knows perhaps"))