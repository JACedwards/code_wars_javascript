// Return true if string could be a valid email address.Return

function emailVerification(str) {

    let regEx = new RegExp('.+@.+\..+')

    return regEx.test(str);

}

console.log(emailVerification('craigephd@gmail.io'))