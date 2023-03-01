// Complete the function/method so that it returns the url with anything after the anchor (#) removed.

// Examples
// "www.codewars.com#about" --> "www.codewars.com"
// "www.codewars.com?page=1" -->"www.codewars.com?page=1"

function removeUrlAnchor(url){
    if (!url.includes('#')) {
        return url
    }
    console.log(url.split('#'))
    for (let i = 0; i < url.length; i++){
        if (url[i] == '#'){
            return `${url.slice(0,i)}`
        }
    }
  }


  console.log(removeUrlAnchor("www.codewars.com#about"))

  function removeUrlAnchor(url){
    return url.split('#')[0];
  }