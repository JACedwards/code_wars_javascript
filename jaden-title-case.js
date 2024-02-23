function toJadenCase (s) {

    s.split(" ").map((e) => e.toUpperCase);
    return s

}

console.log(toJadenCase("How can mirrors be real if our eyes aren't"))
