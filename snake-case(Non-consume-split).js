// "TestController"  -->  "test_controller"
// "MoviesAndBooks"  -->  "movies_and_books"
// "App7Test"        -->  "app7_test"
// 1                 -->  "1"

function toUnderscore(string) {

    let snake = string.toString().split('').map((e) => /[A-Z]/.test(e) ? `_${e.toLowerCase()}` : e).join('');
    
    return snake[0] == '_' ? snake.slice(1) : snake;

}

console.log(toUnderscore("app7_test"))

//Non-consuming split()
// toUnderscore = function(string) {
//     return string.toString().split(/(?=[A-Z])/).join('_').toLowerCase();
//   };