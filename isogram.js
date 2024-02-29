function isIsogram(str){
    l = 0
    str = str.toLowerCase()
    while (l < str.length -1) {

        if (str.slice([l+1]).includes(str[l])) {

            return false
        }
        else {
            l += 1
        }
    }
    return true;
    
  }

console.log(isIsogram("abc"))